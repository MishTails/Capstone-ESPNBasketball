from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def email_valid(form, field):
    #Checking for email to have @ and .com
    email = field.data
    if email[-4:] != '.com' and email[-3:] != '.io' or '@' not in email:
        raise ValidationError('Email is not a valid email')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired("Username is required"), username_exists, Length(3, 25, "Username must be between 3 and 25 characters")])
    email = StringField('email', validators=[DataRequired("Email is required"), user_exists, email_valid])
    password = StringField('password', validators=[DataRequired("Password is required"), Length(8, 30, "Password should be between 8 and 30 characters")])
