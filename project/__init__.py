from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
TEMPLATE_DIR = os.path.join('.', 'static')
STATIC_DIR = os.path.join('.', 'static')
DIST_DIR = os.path.join('.', 'static', 'dist')

app = Flask(
    __name__,
    static_folder=STATIC_DIR,
    static_url_path='',
    template_folder=TEMPLATE_DIR,
)
app.config.from_object(__name__)
app.config['TEMPLATE_DIR'] = TEMPLATE_DIR
app.config['STATIC_DIR'] = STATIC_DIR
app.config['DIST_DIR'] = DIST_DIR

if os.getenv('CONNECTION_STRING') is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('CONNECTION_STRING')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

db = SQLAlchemy(app)
migrate = Migrate(app, db, directory='migrations')

import project.views.views
import project.views.api
import project.models
