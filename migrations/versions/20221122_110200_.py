"""empty message

Revision ID: adbbc454e21b
Revises: 
Create Date: 2022-11-22 11:02:00.104788

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'adbbc454e21b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('leagues',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('league_name', sa.String(length=40), nullable=False),
    sa.Column('size', sa.Integer(), nullable=False),
    sa.Column('occupancy', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=1000), nullable=False),
    sa.Column('draft_date', sa.DateTime(), nullable=False),
    sa.Column('draft_timer', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('league_name')
    )
    op.create_table('mockdrafts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('team_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('draft_pick', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('teams',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('logo', sa.String(length=1000), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('league_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
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
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('teams')
    op.drop_table('mockdrafts')
    op.drop_table('leagues')
    # ### end Alembic commands ###