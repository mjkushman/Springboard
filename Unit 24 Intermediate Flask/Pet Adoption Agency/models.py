from flask_sqlalchemy import SQLAlchemy

# from app import app


db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class Pet(db.Model):
    """The Pets table and model"""

    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    species = db.Column(db.String, nullable=False)
    photo_url = db.Column(db.String)
    age = db.Column(db.Integer)
    notes = db.Column(db.String)
    available = db.Column(db.Boolean, nullable=False, default=True)

    @classmethod
    def get_all(cls):
        return cls.query.all()
