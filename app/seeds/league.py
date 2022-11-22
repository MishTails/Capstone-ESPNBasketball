from app.models import db, League, environment, SCHEMA


# Adds seeded league data
def seed_leagues():
    l1 = League(
        league_name='Dream League',
        size=12,
        occupancy=3,
        description="A league for all those who are aiming for the top",
        draft_date="3/20/2023",
        draft_timer=30)
    l2 = League(
        league_name='Discord Draft League',
        size=8,
        occupancy=5,
        description="Casual Crew",
        draft_date="5/20/2023",
        draft_timer=30)
    l3 = League(
        league_name='Grand Showdown Association',
        size=10,
        occupancy=3,
        description="The crew",
        draft_date="4/20/2023",
        draft_timer=30)
    db.session.add(l1)
    db.session.add(l2)
    db.session.add(l3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_leagues():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.leagues RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM leagues")

    db.session.commit()
