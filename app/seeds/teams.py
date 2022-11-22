from app.models import db, Team, environment, SCHEMA


# Adds seeded league data
def seed_teams():
    t1 = Team(
        name='Do it for Christian',
        logo="https://media.istockphoto.com/id/1013903776/vector/vector-realistic-3d-orange-brown-classic-basketball-icon-closeup-isolated-on-transparency.jpg?s=612x612&w=0&k=20&c=6hqIb4j1YLvqbpB_jOQf7EKOQfJzaLxKLHFMpo_0o7A=",
        user_id=2,
        league_id=1)
    t2 = Team(
        name='icebird',
        logo="https://media.istockphoto.com/id/1013903776/vector/vector-realistic-3d-orange-brown-classic-basketball-icon-closeup-isolated-on-transparency.jpg?s=612x612&w=0&k=20&c=6hqIb4j1YLvqbpB_jOQf7EKOQfJzaLxKLHFMpo_0o7A=",
        user_id=3,
        league_id=1)
    t3 = Team(
        name='Curry/Ja/Vanvleet',
        logo="https://media.istockphoto.com/id/1013903776/vector/vector-realistic-3d-orange-brown-classic-basketball-icon-closeup-isolated-on-transparency.jpg?s=612x612&w=0&k=20&c=6hqIb4j1YLvqbpB_jOQf7EKOQfJzaLxKLHFMpo_0o7A=",
        user_id=1,
        league_id=1)
    db.session.add(t1)
    db.session.add(t2)
    db.session.add(t3)
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
