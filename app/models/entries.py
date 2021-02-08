from .db import db
from flask_login import UserMixin
import enum

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
        return {
            'id': self.id,
            'body': self.body,
            'date': self.date,
            'page_layout': self.page_layout,
            'user': self.user.username,
            'journal': self.journal.to_dict,
            'category': self.category.name
        }
