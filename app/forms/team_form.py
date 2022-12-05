from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, ValidationError
from app.models import User, Team

def validate_image(form, field):
    if(field.data[-4:] != '.jpg' and field.data[-4:] != '.png' and field.data[-5:] !='.jpeg'):
        raise ValidationError("Your image url must end with .jpg, .png, or .jpeg")

def team_exists(form, field):
    name = field.data
    team = Team.query.filter(Team.name == name).first()
    if team:
        raise ValidationError('Team with that name already exists')

class TeamForm(FlaskForm):
    name = StringField('name', validators=[DataRequired("Team Name is required"), Length(3, 18, "Team Name must be between 3 and 18 pictures."), team_exists])
    logo = StringField('logo', validators=[DataRequired("Team Logo is required"), validate_image])
    league_id = IntegerField('league_id')
    user_id = IntegerField('user_id')
