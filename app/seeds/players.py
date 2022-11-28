from app.models import db, Player, environment, SCHEMA
from app.data import nbaPlayersStats

# Adds seeded league data
def seed_players():

  for player in nbaPlayersStats:
    print("THIS IS A PLAYER", nbaPlayersStats[player])
    db.session.add(Player(
      name = str(nbaPlayersStats[player]['name']),
      team = str(nbaPlayersStats[player]['team']),
      minutes = float(nbaPlayersStats[player]['minutes']),
      points = float(nbaPlayersStats[player]['points']),
      field_goal_percent = float(nbaPlayersStats[player]['field_goal_percent']),
      threes = float(nbaPlayersStats[player]['threes']),
      free_throw_percent = float(nbaPlayersStats[player]['free_throw_percent']),
      rebounds = float(nbaPlayersStats[player]['rebounds']),
      assists = float(nbaPlayersStats[player]['assists']),
      turnovers = float(nbaPlayersStats[player]['turnovers']),
      steals = float(nbaPlayersStats[player]['steals']),
      blocks = float(nbaPlayersStats[player]['blocks'])
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


# p1 = Player(
#     name = "luka",
#     team = "DAL",
#     minutes = 20.2,
#     points = 20.2,
#     field_goal_percent = 20.2,
#     threes= 20.2,
#     free_throw_percent = 20.2,
#     rebounds= 20.2,
#     assists = 20.2,
#     turnovers = 20.2,
#     steals= 20.2,
#     blocks = 20.2
#   )
