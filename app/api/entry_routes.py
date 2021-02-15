from flask import Blueprint, request
from app.models import Entry, Journal, User, Image
# from app.forms import JournalForm
from .auth_routes import validation_errors_to_error_messages
from ..models import db
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

# create entry