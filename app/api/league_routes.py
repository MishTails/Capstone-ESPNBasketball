from flask import Blueprint, render_template, request
from flask_login import login_required
from app.forms import LeagueForm

league_routes = Blueprint('leagues', __name__)

@league_routes.route('')
@login_required
def get_all_leagues():
  """
  Query for all leagues and return them in a list of league dictionaries
  """
  leagues = League.query.all()
  return [league.to_dict() for league in leagues]

@league_routes.route('/<int:id>')
@login_required
def get_one_league(id):
  """
  Query for one league and return it as a dictionary
  """
  league = League.query.get(id)
  return league.to_dict()

@league_routes.route('', methods=["POST"])
@login_required
def create_one_league():
  """
  Query to create one league and add it to the database
  """
  allLeagues = Leagues.query.all()
  form = LeagueForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_league = League(
      league_name = form.data['league_name'],
      size = form.data['size'],
      occupancy = 1,
      description = form.data['description'],
      draft_date = form.data['draft_date'],
      draft_timer = form.data['draft_timer']
    )
    db.session.add(new_league)
    db.session.commit()
    return new_league.to_dict()

@league_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_league(id):
  """
  Query to update the information of a league
  """
  data = request.get_json()
  league = League.query.get(id)
  league.league_name = data['name']
  league.size = data['size']
  league.description = data['description']
  league.draft_date = data['draft_date']
  league.draft_timer = data['draft_timer']
  db.session.commit()
  return league.to_dict()


@league_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_league(id):
  """
  Query to delete a league from the website
  """
  league = League.query.get(id)
  db.session.delete(league)
  db.session.commit()
  return dict(message= "Deleted a league")
