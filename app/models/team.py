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
    player_id1 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("players.id")))
    player_id2 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("players.id")))
    player_id3 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("players.id")))
    player_id4 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("players.id")))
    player_id5 = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("players.id")))
    #relationships
    user = db.relationship("User", back_populates='team')
    league = db.relationship("League", back_populates="team")
    player = db.relationship("Player", foreign_keys=[player_id1, player_id2, player_id3, player_id4, player_id5 ], back_populates="team")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'logo': self.logo,
            'user_id': self.user_id,
            'league_id': self.league_id
        }
