from .db import db
from flask_login import UserMixin

class Image(db.Model, UserMixin):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=True)
    entry_id = db.Column(db.Integer, db.ForeignKey('entries.id'))

    entry = db.relationship('Entry', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'entry_id': self.entry_id
        }