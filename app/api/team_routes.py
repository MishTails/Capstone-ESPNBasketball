from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import League, Team

from app.forms import TeamForm

team_routes = Blueprint('teams', __name__)

@team_routes.route('')
@login_required
def get_all_teams():
  """
  Query for all teams and return them in a list of league dictionaries
  """
  teams = Team.query.all()
  return [team.to_dict() for team in teams]

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
  allTeams = Teams.query.all()
  form = TeamForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_team = Team(
      name = form.data['name'],
      logo = form.data['logo'],
      league_id = form.data['league_id'],
      user_id = form.data['ser_id']
    )
    db.session.add(new_team)
    db.session.commit()
    return new_team.to_dict()

@team_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_team(id):
  """
  Query to update the information of a team
  """
  data = request.get_json()
  team = Team.query.get(id)
  team.name = data['name']
  team.logo = data['logo']
  db.session.commit()
  return team.to_dict()

@team_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_team(id):
  """
  Query to delete a team from the website
  """
  team = Team.query.get(id)
  db.session.delete(team)
  db.session.commit()
  return dict(message= "Deleted a team")
