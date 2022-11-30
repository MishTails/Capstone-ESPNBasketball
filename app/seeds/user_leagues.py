from app.models import db, user_leagues, environment, SCHEMA

def seed_user_leagues():

    ul1 = user_leagues.insert().values(user_id=1, league_id=1)
    ul2 = user_leagues.insert().values(user_id=2, league_id=1)
    ul3 = user_leagues.insert().values(user_id=3, league_id=1)
    ul4 = user_leagues.insert().values(user_id=4, league_id=2)
    ul5 = user_leagues.insert().values(user_id=5, league_id=2)
    ul6 = user_leagues.insert().values(user_id=6, league_id=2)
    ul7 = user_leagues.insert().values(user_id=7, league_id=2)
    ul8 = user_leagues.insert().values(user_id=2, league_id=2)
    db.session.execute(ul1)
    db.session.execute(ul2)
    db.session.execute(ul3)
    db.session.execute(ul4)
    db.session.execute(ul5)
    db.session.execute(ul6)
    db.session.execute(ul7)
    db.session.execute(ul8)
    db.session.commit()


def undo_user_leagues():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_leagues RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_leagues")

    db.session.commit()
