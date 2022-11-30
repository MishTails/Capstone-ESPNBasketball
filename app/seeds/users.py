from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    u1 = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")

    u2 = User(
        username='Tails',
        email='tails@gmail.com',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")

    u3 = User(
        username='icebird',
        email='icebird@gmail.com',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")
    u4 = User(
        username='dyluuu',
        email='dyluuu@gmail.com',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")
    u5 = User(
        username='profnhut',
        email='profnhut@gmail.com',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")
    u6 = User(
        username='itsCC',
        email='itsCC@gmail.com',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")
    u7 = User(
        username='willNgo',
        email='willNgo@gmail.com',
        password='password',
        profile_pic="https://static.vecteezy.com/system/resources/previews/007/557/861/original/hacker-mascot-illustration-for-sports-and-esports-logo-free-vector.jpg")


    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    db.session.add(u4)
    db.session.add(u5)
    db.session.add(u6)
    db.session.add(u7)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
