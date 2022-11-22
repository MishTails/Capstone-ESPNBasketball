from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import User

class LeagueForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    draft_pick = IntegerField('draft_pick', validators=[DataRequired()])
