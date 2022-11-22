from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import League

from app.forms import LeagueForm

league_routes = Blueprint('leagues', __name__)

@league_routes.route('')
@login_required
def get_all_leagues():
  """
  Query for all leagues and return them in a list of league dictionaries
  """
  leagues = League.query.all()
  return [leagues.to_dict() for league in leagues]
