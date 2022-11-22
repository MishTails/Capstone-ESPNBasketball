from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import User

class TeamForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    logo = StringField('logo', validators=[DataRequired()])
    team_size = IntegerField('team_size', validators=[DataRequired()])

