from flask import Blueprint, request
from app.models import Entry, Journal, User
# from app.forms import JournalForm
from .auth_routes import validation_errors_to_error_messages

entry_routes = Blueprint('entries', __name__)

@entry_routes.route('/<int:id>')
def index(id):
    entries = Entry.query.filter(Entry.journal_id == id)
    dict_entries = {'entries': [entry.to_dict() for entry in entries]}
    print("print id", id)
    print("print dict", dict_entries)
    return dict_entries