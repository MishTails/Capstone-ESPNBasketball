from app.models import db, Team, environment, SCHEMA


# Adds seeded league data
def seed_teams():
    t1 = Team(
        name='Do it for Christian',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=2,
        league_id=1)
    t2 = Team(
        name='icebird',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=3,
        league_id=1)
    t3 = Team(
        name='Curry/Ja/Vanvleet',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=1,
        league_id=1)
    t4 = Team(
        name='Dyluuuu',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=4,
        league_id=2)
    t5 = Team(
        name='profNhut',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=5,
        league_id=2)
    t6 = Team(
        name='Paradises',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=6,
        league_id=2)
    t7 = Team(
        name='WillStonks',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=7,
        league_id=2)
    t8 = Team(
        name='Boba Team',
        logo="https://t3.ftcdn.net/jpg/00/00/71/10/360_F_711081_WvnJyU9WBLUegBLVfghDN2YZjFuQ5b.jpg",
        user_id=2,
        league_id=2)
    db.session.add(t1)
    db.session.add(t2)
    db.session.add(t3)
    db.session.add(t4)
    db.session.add(t5)
    db.session.add(t6)
    db.session.add(t7)
    db.session.add(t8)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_teams():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM teams")
    db.session.commit()
