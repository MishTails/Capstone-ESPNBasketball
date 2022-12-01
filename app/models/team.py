from .db import db, environment, SCHEMA, add_prefix_for_prod
from .roster import rosters

class Team(db.Model):
    __tablename__ = 'teams'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    logo = db.Column(db.String(1000))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    league_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("leagues.id")), nullable=False)

    #relationships
    user = db.relationship("User", back_populates='team')
    league = db.relationship("League", back_populates="team")
    player = db.relationship("Player", secondary=rosters, back_populates="myteam")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'logo': self.logo,
            'user_id': self.user_id,
            'league_id': self.league_id,
            'players': self.get_all_players(),
            'owner':self.get_team_owner(),
            'league': self.league.league_name
        }

    def get_all_players(self):
        return [data for data in [player.to_dict() for player in self.player]]

    def get_team_owner(self):
        return self.user.username
