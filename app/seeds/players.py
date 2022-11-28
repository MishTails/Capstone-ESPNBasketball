from app.models import db, Player, environment, SCHEMA
from app.data import nbaPlayersStats

# Adds seeded league data
def seed_players():

  # p1=Player(
  #   name="luka",
  #   team="DAL",
  #   minutes=20.2,
  #   points=20.2,
  #   field_goal_percent=20.2,
  #   threes=20.2,
  #   free_throw_percent=20.2,
  #   rebounds=20.2,
  #   assists=20.2,
  #   turnovers=20.2,
  #   steals=20.2,
  #   blocks=20.2
  # )
  # db.session.add(p1)
  # db.session.commit()

  for player in nbaPlayersStats:
    print("THIS IS A PLAYER", nbaPlayersStats[player])
    db.session.add(Player(
      name=nbaPlayersStats[player]['name'],
      team=nbaPlayersStats[player]['team'],
      minutes=nbaPlayersStats[player]['minutes'],
      points=nbaPlayersStats[player]['points'],
      field_goal_percent=nbaPlayersStats[player]['field_goal_percent'],
      threes=nbaPlayersStats[player]['threes'],
      free_throw_percent=nbaPlayersStats[player]['free_throw_percent'],
      rebounds=nbaPlayersStats[player]['rebounds'],
      assists=nbaPlayersStats[player]['assists'],
      turnovers=nbaPlayersStats[player]['turnovers'],
      steals=nbaPlayersStats[player]['steals'],
      blocks=nbaPlayersStats[player]['blocks']
    ))
  db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_players():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.players RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM players")
    db.session.commit()
