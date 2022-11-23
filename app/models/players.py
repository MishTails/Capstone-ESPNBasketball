from .db import db, environment, SCHEMA, add_prefix_for_prod

class Players(db.Model):
  __tablename__ = 'players'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(60), nullable = False)
  team = db.Column(db.String(50), nullable = False)
  minutes = db.Column(db.Float)
  points  = db.Column(db.Float)
  field_goal_percent  = db.Column(db.Float)
  threes = db.Column(db.Float)
  free_throw_percent  = db.Column(db.Float)
  rebounds  = db.Column(db.Float)
  assists = db.Column(db.Float)
  turnovers = db.Column(db.Float)
  steals  = db.Column(db.Float)
  blocks  = db.Column(db.Float)

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'team': self.team,
      'minutes': self.minutes,
      'points': self.points,
      'field_goal_percent': self.field_goal_percent,
      'threes': self.threes,
      'free_throw_percent': self.free_throw_percent,
      'rebounds': self.rebounds,
      'assists': self.assists,
      'turnovers': self.turnovers,
      'steals': self.steals,
      'blocks': self.blocks
    }
