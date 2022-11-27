# from app.models import db, UserLeague, environment, SCHEMA

# def seed_user_leagues():

#     ul1 = UserLeague(
#       user_id=1,
#       league_id=1
#     )
#     ul2 = UserLeague(
#       user_id=2,
#       league_id=1
#     )
#     ul3 = UserLeague(
#       user_id=3,
#       league_id=1
#     )

#     db.session.add(ul1)
#     db.session.add(ul2)
#     db.session.add(ul3)
#     db.session.commit()


# def undo_user_leagues():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.user_leagues RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM user_leagues")

#     db.session.commit()
