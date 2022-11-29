from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

user_leagues = db.Table(
  "user_leagues",
  db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True),
  db.Column("league_id", db.Integer, db.ForeignKey(add_prefix_for_prod("leagues.id")), primary_key=True)
)
