from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import Player, db

player_routes = Blueprint('players', __name__)

@player_routes.route('')
@login_required
def get_all_players():
  """
  Query for all leagues and return them in a list of player dictionaries
  """
  players = Player.query.all()
  return {'players': [player.to_dict() for player in players]}

@player_routes.route('/:name')
@login_required
def get_one_player(name):
  """
  Query for getting one player and returning it as a dictionary
  """
  player = Player.query.get(name)
  return player.to_dict()
