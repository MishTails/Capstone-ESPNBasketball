from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from app.models import League, Team, db
from app.s3_helper import (
    upload_file_to_s3, allowed_file, get_unique_filename)

from app.forms import TeamForm

team_routes = Blueprint('teams', __name__)

def validation_errors_to_error_messages(validation_errors):
  """
  Simple function that turns the WTForms validation errors into a simple list
  """
  errorMessages = dict()
  for field in validation_errors:
      for error in validation_errors[field]:
          errorMessages[f'{field}'] = f'{error}'
  return errorMessages

@team_routes.route('')
@login_required
def get_all_teams():
  """
  Query for all teams and return them in a list of league dictionaries
  """
  teams = Team.query.all()
  return {'teams': [team.to_dict() for team in teams]}

@team_routes.route('/<int:id>')
@login_required
def get_one_team(id):
  """
  Query for one team and return it as a dictionary
  """
  team = Team.query.get(id)
  return team.to_dict()

@team_routes.route('/<int:id>', methods=["POST"])
@login_required
def create_one_team(id):
  """
  Query to create one team and add it to the database
  """
  # form = TeamForm()
  print(request.files, "REQUEST>FILES")
  if "teamLogo" not in request.files:
    print("Image is the problem")
    return {"errors": "image required"}, 400

  image = request.files["teamLogo"]
  print(image, "Lobster")
  if not allowed_file(image.filename):
    print('imagefile name is the problem')
    return {"errors": "file type not permitted"}, 400
  image.filename = get_unique_filename(image.filename)
  upload = upload_file_to_s3(image)

  if "url" not in upload:
    # if the dictionary doesn't have a url key
    # it means that there was an error when we tried to upload
    # so we send back that error message
    print('url is the problem')
    return upload, 400
  data = request.form
  url = upload["url"]

  allTeams = Team.query.all()

  # form['csrf_token'].data = request.cookies['csrf_token']
  # if form.validate_on_submit():
  new_team = Team(
    name = data['teamName'],
    logo = url,
    league_id = id,
    user_id = current_user.id
  )
  db.session.add(new_team)
  db.session.commit()
  return new_team.to_dict()
  # return {'errors': validation_errors_to_error_messages(form.errors)},401

@team_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_team(id):
  """
  Query to update the information of a team
  """
  form = TeamForm()
  # if "image" not in request.files:
  #   return {"errors": "image required"}, 400

  # image = request.files["image"]
  #   if not allowed_file(image.filename):
  #     return {"errors": "file type not permitted"}, 400

  image = get_unique_filename(form.data['logo'])
  upload = upload_file_to_s3(image)

  if "url" not in upload:
    # if the dictionary doesn't have a url key
    # it means that there was an error when we tried to upload
    # so we send back that error message
    return upload, 400

  url = upload["url"]

  team = Team.query.get(id)
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    team.name = form.data['name']
    team.logo = url
    db.session.commit()
    return team.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)},402

@team_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_team(id):
  """
  Query to delete a team from the website
  """
  team = Team.query.get(id)
  db.session.delete(team)
  db.session.commit()
  return dict(message="Deleted")
