from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import rosters, db
from app.forms import RosterForm
from sqlalchemy import delete

roster_routes = Blueprint('rosters', __name__)

@roster_routes.route('/<int:playerId>/teams/<int:teamId>', methods=["POST"])
@login_required
def create_one_roster(playerId, teamId):
  """
  Query to create one team and add it to the database
  """
  ros = rosters.insert().values(team_id=teamId, player_id=playerId)
  db.session.execute(ros)
  db.session.commit()
  return dict(message="added")
  #might neeed to turn each new roster into a dict

@roster_routes.route('/<int:playerId>/teams/<int:teamId>', methods=["DELETE"])
@login_required
def delete_roster(playerId, teamId):
  """
  Query to delete a team from the website
  """
  print("rosters",{rosters})
  stmt = (rosters.delete().where(rosters.c.team_id == teamId, rosters.c.player_id == playerId))
  # ros = rosters.delete().where(rosters.team_id==teamId, rosters.player_id==playerId)
  db.session.execute(stmt)
  db.session.commit()
  return dict(message="Deleted")
