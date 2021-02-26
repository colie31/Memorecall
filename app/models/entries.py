from .db import db
from flask_login import UserMixin
import enum
import json

class PageLayout(enum.Enum):
    layout_one = 1
    layout_two = 2
    layout_three = 3

class Entry(db.Model, UserMixin):
    __tablename__ = 'entries'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.Date, nullable=False)
    page_layout = db.Column(db.Enum(PageLayout), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    journal_id = db.Column(db.Integer, db.ForeignKey('journals.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)

    user = db.relationship('User', back_populates='entries')
    journal = db.relationship('Journal', back_populates='entries')
    category = db.relationship('Category', back_populates='entry')
    images = db.relationship('Image', back_populates='entry')

    def to_dict(self):
        year = self.date.year
        month = self.date.month
        day = self.date.day
        

        return {
            'id': self.id,
            'body': self.body,
            'date': self.date,
            'date_object': {'month': self.date.month,
                            'year': self.date.year,
                            'day': self.date.day},
            'page_layout': self.page_layout.value,
            'user': self.user.username,
            'journal_name': self.journal.name,
            'journal_id': self.journal_id,
            'category': self.category.name,
            'category_id': self.category_id,
            'images': [image.to_dict() for image in self.images]
        }

