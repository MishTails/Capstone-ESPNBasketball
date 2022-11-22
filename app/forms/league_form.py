from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired
from app.models import User

class LeagueForm(FlaskForm):
    league_name = StringField('league_name', validators=[DataRequired()])
    size = IntegerField('size', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    draft_date = DateTimeField('draft_date', validators=[DataRequired()])
    draft_timer = IntegerField('draft_timer', validators=[DataRequired()])
