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
    draft_date = db.Column(db.String, nullable=False)
    draft_timer = db.Column(db.Integer, nullable= False)

    def to_dict(self):
        return {
            'id': self.id,
            'league_name': self.league_name,
            'size': self.size,
            'occupancy': self.occupancy
            'description': self.description
            'draft_date': self.draft_date
            'draft_timer': self.draft_timer
        }
