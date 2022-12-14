from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .user_leagues import user_leagues
time_data = "25/05/23"
format_data = "%d/%m/%y"



class League(db.Model):
    __tablename__ = 'leagues'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    commissioner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    league_name = db.Column(db.String(40), nullable=False, unique=True)
    size = db.Column(db.Integer, nullable=False)
    occupancy =  db.Column(db.Integer)
    description = db.Column(db.String(1000), nullable=False)
    draft_date = db.Column(db.String, nullable=False, default=datetime.strptime(time_data, format_data))
    draft_timer = db.Column(db.Integer, nullable= False)

    #relationships
    team = db.relationship("Team", back_populates="league", cascade="all, delete-orphan")
    user = db.relationship("User", secondary=user_leagues,  back_populates="league")
    commishLeague = db.relationship("User", back_populates= "commishUser")


    def to_dict(self):
        return {
            'id': self.id,
            'commissioner_id': self.commissioner_id,
            'league_name': self.league_name,
            'size': self.size,
            'occupancy': self.occupancy,
            'description': self.description,
            'draft_date': self.draft_date,
            'draft_timer': self.draft_timer,
            'commish': self.get_commish(),
            'teams': self.get_teams()
        }

    def get_commish(self):
        return self.commishLeague.username

    def get_teams(self):
        return [data for data in [teams.to_dict() for teams in self.team]]
