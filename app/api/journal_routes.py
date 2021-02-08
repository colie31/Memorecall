from flask import Blueprint, request
from app.models import Journal
from app.forms import JournalForm
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages

journal_routes = Blueprint('journals', __name__)

# grab all journals
@journal_routes.route('/')
@login_required
def index():
    journals = Journal.query.all()
    return { 'journals': [journal.to_dict() for journal in journals] }

# grab one journal
@journal_routes.route('/<int:id>')
@login_required
def find_journal(id):
    journal = Journal.query.get_or_404(id)
    return journal.to_dict()

# create a journal
@journal_routes.route('/', methods=['POST'])
@login_required
def create_journal():
    form = JournalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_journal = Journal(
            name = form.data['name'],
            color_id = form.data['category_id'],
            user = current_user.id
        )
        db.session.add(new_journal)
        db.session.commit()
        return new_journal.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

# update a journal
# @login_required
    


# delete a journal
# @login_required