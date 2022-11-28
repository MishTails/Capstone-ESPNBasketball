from app.models import db, rosters, environment, SCHEMA

def seed_rosters():

    r1 = rosters.insert().values(team_id=1, player_id=1)
    r2 = rosters.insert().values(team_id=1, player_id=2)
    r3 = rosters.insert().values(team_id=1, player_id=3)
    r4 = rosters.insert().values(team_id=1, player_id=4)
    r5 = rosters.insert().values(team_id=1, player_id=5)
    db.session.execute(r1)
    db.session.execute(r2)
    db.session.execute(r3)
    db.session.execute(r4)
    db.session.execute(r5)
    db.session.commit()


def undo_rosters():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.rosters RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM rosters")

    db.session.commit()
