from .db import db
from flask_login import UserMixin

class Color(db.Model, UserMixin):
    __tablename__ = 'colors'

    id = db.Column(db.Integer, primary_key=True)
    shade = db.Column(db.String, nullable=True, default="#8bc34a")
    
    journals = db.relationship('Journal', back_populates='color')

    def to_dict(self):
        return {
            "id": self.id,
            "shade": self.shade,
        }