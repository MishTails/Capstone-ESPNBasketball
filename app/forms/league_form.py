from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired, Length, NumberRange
from app.models import User

class LeagueForm(FlaskForm):
    league_name = StringField('league_name', validators=[DataRequired('League Name is required'), Length(3, 18, 'League Name must be between 3 and 18 characters ')])
    commissioner_id = IntegerField('commissioner_id', validators=[DataRequired()])
    size = IntegerField('size', validators=[DataRequired('League Size is required'), NumberRange(4, 12, 'Your League may have between 4 and 12 teams')])
    description = TextAreaField('description', validators=[DataRequired('League Description is required'), Length(3, 200, 'Your League Description may be between 3 and 200 characters')])
    draft_date = StringField('draft_date', validators=[DataRequired("Draft Date is required")])
    draft_timer = IntegerField('draft_timer', validators=[DataRequired('Draft Timer is required'), NumberRange(30, 300, 'Your Draft time may be between 30 and 300 seconds')])
