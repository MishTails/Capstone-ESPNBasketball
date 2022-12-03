from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import User
from datetime import date

today = date.today()
curr = today.strftime("%d/%m/%y")
currDateNum = int(curr.replace('/', ''))

def draft_date_valid(form, field):
    date = field.data
    if date[2] != '/' and date[5] != '/':
        raise ValidationError('Draft date is invalid')
    if date[6:8] < curr[6:8]:
        raise ValidationError('Can not put a date in the past')
    if date[6:8] == curr[6:8] and date[3:5] < curr[3:5]:
        raise ValidationError('Can not put a date in the past')
    if date[6:8] == curr[6:8] and date[3:5] == curr[3:5] and date[0:2] < curr[0:2]:
        raise ValidationError('Can not put a date in the past')



class LeagueForm(FlaskForm):
    league_name = StringField('league_name', validators=[DataRequired('League Name is required'), Length(3, 18, 'League Name must be between 3 and 18 characters ')])
    commissioner_id = IntegerField('commissioner_id', validators=[DataRequired()])
    size = IntegerField('size', validators=[DataRequired('League Size is required'), NumberRange(4, 12, 'Your League may have between 4 and 12 teams')])
    description = TextAreaField('description', validators=[DataRequired('League Description is required'), Length(3, 200, 'Your League Description may be between 3 and 200 characters')])
    draft_date = StringField('draft_date', validators=[DataRequired("Draft Date is required"), Length(8, 8,"Draft Date needs to be 8 characters long"), draft_date_valid])
    draft_timer = IntegerField('draft_timer', validators=[DataRequired('Draft Timer is required'), NumberRange(30, 300, 'Your Draft time may be between 30 and 300 seconds')])
