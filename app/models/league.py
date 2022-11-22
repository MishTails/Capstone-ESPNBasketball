from .db import db, environment, SCHEMA, add_prefix_for_prod

class League(db.Model):
    __tablename__ = 'leagues'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    league_name = db.Column(db.String(40), nullable=False, unique=True)
    size = db.Column(db.Integer, nullable=False)
    occupancy =  db.Column(db.Integer)
    description = db.Column(db.String(1000), nullable=False)
    draft_date = db.Column(db.DateTime, nullable=False)
    draft_timer = db.Column(db.Integer, nullable= False)
