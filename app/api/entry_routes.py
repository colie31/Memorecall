from flask import Blueprint, request
from app.models import Entry, Journal, User, Image, Category
# from app.forms import JournalForm
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from ..models import db
from app.forms import EntryForm
import datetime
# for images
# from werkzeug.utils import secure_filename
# from ..helpers import *
# from flask import request
# make a new form data on the front end
# send to route
# grab the image url
# const form = new FormData();
# form.append("image", image);
# image = request.files["image"]

# image.filename = secure_filename(image.filename)
# imgUrl = upload_file_to_s3(image, Config.S3_BUCKET)
# from ..config import Config



entry_routes = Blueprint('entries', __name__)

# grab entries for a jounal
@entry_routes.route('/<int:id>')
def index(id):
    entries = Entry.query.filter(Entry.journal_id == id).order_by(Entry.date.asc()).all()
    return {'entries': [entry.to_dict() for entry in entries]}

# delete an entry
@entry_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_entry(id):
    entry = Entry.query.get(id)
    db.session.delete(entry)
    db.session.commit()
    return { 'message': 'Success' }

# getting all available categories
@entry_routes.route('/categories')
def get_categories():
    categories = Category.query.all()
    return { 'categories': [category.to_dict() for category in categories]}

# create entry
@entry_routes.route('/new', methods=['POST'])
def created_entry():
    form = EntryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # content = request.json
        new_entry = Entry(
            body = form.data['body'],
            date = datetime.datetime.now(),
            page_layout = form.data['page_layout'],
            user = current_user,
            journal_id = form.data['journal_id'],
            category_id = form.data['category_id']
        )
        db.session.add(new_entry)
        db.session.commit()
        return new_entry.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# update entry
@entry_routes.route('/<int:id>/update', methods=['PUT'])
def update_entry(id):
    form = EntryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # content = request.json
        entry_update = Entry.query.get(id),
        entry_update.body = form.data['body'],
        entry_update.category_id = form.data['category_id']

        db.session.add(entry_update)
        db.session.commit()
        return entry_update.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
