from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import League, Team, db

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

@team_routes.route('', methods=["POST"])
@login_required
def create_one_team():
  """
  Query to create one team and add it to the database
  """
  allTeams = Team.query.all()
  form = TeamForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_team = Team(
      name = form.data['name'],
      logo = form.data['logo'],
      league_id = form.data['league_id'],
      user_id = form.data['user_id']
    )
    db.session.add(new_team)
    db.session.commit()
    return new_team.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)},401

@team_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_team(id):
  """
  Query to update the information of a team
  """
  form = TeamForm()
  team = Team.query.get(id)
  if form.validate_on_submit():
    team.name = form.data['name']
    team.logo = form.data['logo']
    db.session.commit()
    return team.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)},401

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
