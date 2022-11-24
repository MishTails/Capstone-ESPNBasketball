from .db import db, environment, SCHEMA, add_prefix_for_prod

class Team(db.Model):
    __tablename__ = 'teams'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    logo = db.Column(db.String(1000))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    league_id = db.Column(db.Integer, db.ForeignKey("leagues.id") nullable=False)

    #relationships
    user = db.relationship("User", back_populates="teams")
    league = db.relationship("League", back_populates="teams")
    player = db.relationship("Player", secondary=rosters, back_populates="teams")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'logo': self.logo,
            'user_id': self.user_id,
            'league_id': self.league_id
        }
