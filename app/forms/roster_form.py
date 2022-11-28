from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import User

class RosterForm(FlaskForm):
    team_id = IntegerField('team_id', validators=[DataRequired()])
    player_id = IntegerField('player_id', validators=[DataRequired()])
