from app.models import db, MockDraft, environment, SCHEMA


# Adds seeded league data
def seed_mockdraft():
    md1 = MockDraft(
        name='Noob Draft',
        team_id=1,
        draft_pick=1)
    md2 = MockDraft(
        name='Veteran Draft',
        team_id=1,
        draft_pick=1)
    md3 = MockDraft(
        name='Pro Draft',
        team_id=1,
        draft_pick=1)
    db.session.add(md1)
    db.session.add(md2)
    db.session.add(md3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_mockdraft():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.mockdrafts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM mockdrafts")
    db.session.commit()
