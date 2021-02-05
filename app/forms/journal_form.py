from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class JournalForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(0, 20, 'Journal name is over 20 characters long')])
    category_id = IntegerField('category id', validatore=[DataRequired()])

    