from flask import Blueprint, render_template, request
from flask_login import login_required
from app.models import League, db
from app.forms import LeagueForm

league_routes = Blueprint('leagues', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = dict()
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages[f'{field}'] = f'{error}'
    return errorMessages

@league_routes.route('')
@login_required
def get_all_leagues():
  """
  Query for all leagues and return them in a list of league dictionaries
  """
  leagues = League.query.all()
  return {'leagues': [league.to_dict() for league in leagues]}

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
  allLeagues = League.query.all()
  form = LeagueForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_league = League(
      league_name = form.data['league_name'],
      commissioner_id= form.data['commissioner_id'],
      size = form.data['size'],
      occupancy = 0,
      description = form.data['description'],
      draft_date = form.data['draft_date'],
      draft_timer = form.data['draft_timer']
    )
    db.session.add(new_league)
    db.session.commit()
    return new_league.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@league_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_league(id):
  """
  Query to update the information of a league
  """
  league = League.query.get(id)
  form = LeagueForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    league.league_name = form.data['league_name']
    league.size = form.data['size']
    league.description = form.data['description']
    league.draft_date = form.data['draft_date']
    league.draft_timer = form.data['draft_timer']
    db.session.commit()
    return league.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@league_routes.route('/<int:id>/up', methods=["PUT"])
@login_required
def update_occupancy(id):
  """
  Query to increase a league's occupancy when someone joins a league
  """
  league = League.query.get(id)
  league.occupancy += 1
  db.session.commit()
  return league.to_dict()

@league_routes.route('/<int:id>/down', methods=["PUT"])
@login_required
def lower_occupancy(id):
  """
  Query to increase a league's occupancy when someone joins a league
  """
  league = League.query.get(id)
  league.occupancy -= 1
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
