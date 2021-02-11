from flask import Blueprint, request
from app.models import Entry, Journal, User
# from app.forms import JournalForm
from .auth_routes import validation_errors_to_error_messages

entry_routes = Blueprint('entries', __name__)

@entry_routes.route('/<int:id>')
def index(id):
    entries = Entry.query.filter(Entry.journal_id == id).order_by(Entry.date.asc()).all()
    return {'entries': [entry.to_dict() for entry in entries]}