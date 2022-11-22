from .db import db, environment, SCHEMA, add_prefix_for_prod

class Team(db.Model):
    __tablename__ = 'teams'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    logo = db.Column(db.String(1000))
    user_id = db.Column(db.Integer, nullable=False)
    league_id = db.Column(db.Integer, nullable=False)
