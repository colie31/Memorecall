from werkzeug.utils import secure_filename
from ..helpers import *
from flask import request
# make a new form data on the front end
# send to route
# grab the image url
# const form = new FormData();
# form.append("image", image);
# image = request.files["image"]

image.filename = secure_filename(image.filename)
imgUrl = upload_file_to_s3(image, Config.S3_BUCKET)
from ..config import Config