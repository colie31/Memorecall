from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class EntryForm(FlaskForm):
    body = StringField('Body', validators=[DataRequired()])
    page_layout = StringField('PageLayout', validators=[DataRequired()])
    journal_id = IntegerField('JournalId', validators=[DataRequired()])
    category_id = IntegerField('CategoryId', validators=[DataRequired()])