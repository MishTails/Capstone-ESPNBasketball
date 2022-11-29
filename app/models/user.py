from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_leagues import user_leagues

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_pic = db.Column(db.String(1000), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    # #relationship attributes
    team = db.relationship("Team", back_populates="user", cascade="all, delete-orphan")
    league = db.relationship("League", secondary=user_leagues, back_populates="user")
    commishUser= db.relationship("League", back_populates="commishLeague", cascade="all, delete-orphan")



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'leagues': self.get_leagues()
        }
    def get_leagues(self):
        return [data for data in [league.to_dict() for league in self.league]]
