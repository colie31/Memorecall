from .db import db
from flask_login import UserMixin

class Journal(db.Model, UserMixin):
    __tablename__ = 'journals'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)
    color = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', back_populates='journals')
    entries = db.relationship('Entry', back_populates='journal')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'color': self.color,
            'user': self.user_id
            }