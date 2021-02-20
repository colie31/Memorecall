from flask import Blueprint, request, redirect
from app.models import Journal, User, db
from app.forms import JournalForm
from flask_login import login_required, current_user, login_manager
from .auth_routes import validation_errors_to_error_messages

journal_routes = Blueprint('journal', __name__)

# grab all user journals
@journal_routes.route('/<int:id>')
@login_required
def index(id):
    # print("current user", current_user)
    journals = Journal.query.filter(Journal.user_id == id).all()
    return { 'journals': [journal.to_dict() for journal in journals] }


# create a journal
@journal_routes.route('/create', methods=['POST'])
@login_required
def create_journal():
    form = JournalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_journal = Journal(
            name = form.data['name'],
            color = form.data['color'],
            user = current_user
        )
        db.session.add(new_journal)
        db.session.commit()
        return new_journal.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# update a journal
@journal_routes.route('/<int:id>/update', methods=['PUT'])
@login_required
def update_journal(id):
    form = JournalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        journal_update = Journal.query.get(id)
        journal_update.name = form.data['name']
        journal_update.color = form.data['color']
        db.session.commit()
        return journal_update.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@journal_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_journal(id):
    print("Hello from delete")
    journal = Journal.query.get(id)
    db.session.delete(journal)
    db.session.commit()
    return { "message": "success"}

    


# delete a journal
# @login_required