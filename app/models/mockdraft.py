from .db import db, environment, SCHEMA, add_prefix_for_prod

class MockDraft(db.Model):
    __tablename__ = 'mockdrafts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(40), nullable=False)
    draft_pick = db.Column(db.Integer, nullable=False)
