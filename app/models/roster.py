from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

rosters = db.Table(
  "rosters",
  db.Column("player_id", db.Integer, db.ForeignKey("players.id"), primary_key = True),
  db.Column("team_id", db.Integer, db.ForeignKey("teams.id"), primary_key= True)

)
