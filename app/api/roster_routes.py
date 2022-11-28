from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import rosters, db
from app.forms import RosterForm

roster_routes = Blueprint('rosters', __name__)

@roster_routes.route('')
@login_required
def get_all_rosters():
  """
  Query for all rosters and return them in a list of league dictionaries
  """
  print("THIS IS THE DB",db)
  testvar = rosters.select()
  print("TESTVAR", testvar)
  return {'rosters': [roster for roster in my_rosters]}
  # might need roster.to_dict to be made

@roster_routes.route('/<int:id>')
@login_required
def get_one_roster(id):
  """
  Query for one team and return it as a dictionary
  """
  roster = rosters.query.get(id)
  return roster
  # might need roster.to_dict to be made

@roster_routes.route('', methods=["POST"])
@login_required
def create_one_roster():
  """
  Query to create one team and add it to the database
  """
  allRoster = rosters.query.all()
  form = RosterForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_roster = rosters.insert().values(team_id=form.data['team_id'], roster_id=form.data['roster_id'])
    new_roster = rosters(
      team_id = form.data['team_id'],
      roster_id = form.data['roster_id']
    )
    db.session.add(new_roster)
    db.session.commit()
    return new_roster
  #might neeed to turn each new roster into a dict

@roster_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_roster(id):
  """
  Query to delete a team from the website
  """
  roster = rosters.query.get(id)
  db.session.delete(roster)
  db.session.commit()
  return dict(message="Deleted")
