from app.models import db, rosters, environment, SCHEMA

def seed_rosters():

    r1 = rosters.insert().values(team_id=1, player_id=1)
    r2 = rosters.insert().values(team_id=1, player_id=2)
    r3 = rosters.insert().values(team_id=1, player_id=3)
    r4 = rosters.insert().values(team_id=1, player_id=4)
    r5 = rosters.insert().values(team_id=1, player_id=5)
    r6 = rosters.insert().values(team_id=2, player_id=6)
    r7 = rosters.insert().values(team_id=2, player_id=7)
    r8 = rosters.insert().values(team_id=2, player_id=8)
    r9 = rosters.insert().values(team_id=2, player_id=9)
    r10 = rosters.insert().values(team_id=2, player_id=10)
    r11 = rosters.insert().values(team_id=3, player_id=11)
    r12 = rosters.insert().values(team_id=3, player_id=12)
    r13 = rosters.insert().values(team_id=3, player_id=13)
    db.session.execute(r1)
    db.session.execute(r2)
    db.session.execute(r3)
    db.session.execute(r4)
    db.session.execute(r5)
    db.session.execute(r6)
    db.session.execute(r7)
    db.session.execute(r8)
    db.session.execute(r9)
    db.session.execute(r10)
    db.session.execute(r11)
    db.session.execute(r12)
    db.session.execute(r13)

    db.session.commit()


def undo_rosters():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.rosters RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM rosters")

    db.session.commit()
