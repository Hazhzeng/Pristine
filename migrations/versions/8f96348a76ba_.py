"""empty message

Revision ID: 8f96348a76ba
Revises: 
Create Date: 2020-07-29 23:49:39.085577

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8f96348a76ba'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('TagModel',
    sa.Column('Id', sa.Integer(), nullable=False),
    sa.Column('Tag', sa.String(length=128), nullable=False),
    sa.Column('DateAddedUtc', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('Id'),
    sa.UniqueConstraint('Tag')
    )
    op.create_table('UserModel',
    sa.Column('Id', sa.Integer(), nullable=False),
    sa.Column('Username', sa.String(length=32), nullable=False),
    sa.Column('Salt', sa.String(length=32), nullable=False),
    sa.Column('Hash', sa.String(length=128), nullable=False),
    sa.Column('Token', sa.String(length=32), nullable=True),
    sa.Column('RegistrationDateUtc', sa.DateTime(), nullable=True),
    sa.Column('LoginDateUtc', sa.DateTime(), nullable=True),
    sa.Column('ExpiryDateUtc', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('Id'),
    sa.UniqueConstraint('Username')
    )
    op.create_table('BlogModel',
    sa.Column('Id', sa.Integer(), nullable=False),
    sa.Column('AuthorId', sa.Integer(), nullable=True),
    sa.Column('Title', sa.String(length=128), nullable=False),
    sa.Column('Text', sa.Text(), nullable=True),
    sa.Column('LastUpdateDateUtc', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['AuthorId'], ['UserModel.Id'], ),
    sa.PrimaryKeyConstraint('Id')
    )
    op.create_table('BlogTagAssociation',
    sa.Column('Id', sa.Integer(), nullable=False),
    sa.Column('BlogId', sa.Integer(), nullable=True),
    sa.Column('TagId', sa.Integer(), nullable=True),
    sa.Column('DateAddedUtc', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['BlogId'], ['BlogModel.Id'], ),
    sa.ForeignKeyConstraint(['TagId'], ['TagModel.Id'], ),
    sa.PrimaryKeyConstraint('Id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('BlogTagAssociation')
    op.drop_table('BlogModel')
    op.drop_table('UserModel')
    op.drop_table('TagModel')
    # ### end Alembic commands ###
