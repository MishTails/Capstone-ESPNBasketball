# from app.models import db, Roster, environment, SCHEMA

# def seed_rosters():

#     r1 = Roster(
#       team_id=1,
#       player_id=1
#     )
#     r2 = Roster(
#       team_id=1,
#       player_id=2
#     )
#     r3 = Roster(
#       team_id=1,
#       player_id=3
#     )
#     r4 = Roster(
#       team_id=1,
#       player_id=4
#     )
#     r5 = Roster(
#       team_id=1,
#       player_id=5
#     )
#     db.session.add(r1)
#     db.session.add(r2)
#     db.session.add(r3)
#     db.session.add(r4)
#     db.session.add(r5)
#     db.session.commit()


# def undo_rosters():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.rosters RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM rosters")

#     db.session.commit()
