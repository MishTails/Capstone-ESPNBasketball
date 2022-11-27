from app.models import db, environment, SCHEMA
"""empty message

Revision ID: c1219de140fe
Revises:
Create Date: 2022-11-27 00:49:05.352701

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c1219de140fe'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mockdrafts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('team_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('draft_pick', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE mockdrafts SET SCHEMA {SCHEMA};")
    op.create_table('players',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('team', sa.String(), nullable=False),
    sa.Column('minutes', sa.Float(), nullable=True),
    sa.Column('points', sa.Float(), nullable=True),
    sa.Column('field_goal_percent', sa.Float(), nullable=True),
    sa.Column('threes', sa.Float(), nullable=True),
    sa.Column('free_throw_percent', sa.Float(), nullable=True),
    sa.Column('rebounds', sa.Float(), nullable=True),
    sa.Column('assists', sa.Float(), nullable=True),
    sa.Column('turnovers', sa.Float(), nullable=True),
    sa.Column('steals', sa.Float(), nullable=True),
    sa.Column('blocks', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE players SET SCHEMA {SCHEMA};")
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('profile_pic', sa.String(length=1000), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    op.create_table('leagues',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('commissioner_id', sa.Integer(), nullable=False),
    sa.Column('league_name', sa.String(length=40), nullable=False),
    sa.Column('size', sa.Integer(), nullable=False),
    sa.Column('occupancy', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=1000), nullable=False),
    sa.Column('draft_date', sa.String(), nullable=False),
    sa.Column('draft_timer', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['commissioner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('league_name')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE leagues SET SCHEMA {SCHEMA};")
    op.create_table('teams',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('logo', sa.String(length=1000), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('league_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['league_id'], ['leagues.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE teams SET SCHEMA {SCHEMA};")
    op.create_table('user_leagues',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('league_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['league_id'], ['leagues.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE user_leagues SET SCHEMA {SCHEMA};")
    op.create_table('rosters',
    sa.Column('player_id', sa.Integer(), nullable=False),
    sa.Column('team_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['player_id'], ['players.id'], ),
    sa.ForeignKeyConstraint(['team_id'], ['teams.id'], ),
    sa.PrimaryKeyConstraint('player_id', 'team_id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE rosters SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.drop_table('rosters')
    # op.drop_table('user_leagues')
    op.drop_table('teams')
    op.drop_table('leagues')
    op.drop_table('users')
    op.drop_table('players')
    op.drop_table('mockdrafts')
    # ### end Alembic commands ###
