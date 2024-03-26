from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField, IntegerField, SelectField, TextAreaField
from wtforms.validators import InputRequired, NumberRange, Optional, URL

species =['cat', 'dog', 'porcupine']


class AddPetForm(FlaskForm):
    """ Form for creating a new pet. All fields present"""
    name = StringField("Pet Name", validators=[InputRequired(message='Enter a name for this pet')])
    species = SelectField("Pet Species", choices=[(s, s) for s in species], validators=[InputRequired('This field is required')])
    photo_url = StringField("Photo URL", validators=[Optional(),URL()])
    age = IntegerField("Pet Age", validators=[Optional(),NumberRange(min=0)])
    notes = TextAreaField("Notes", validators=[Optional()])
    available = BooleanField('Available', validators=[Optional()])

class EditPetForm(FlaskForm):
    """ A smaller form just for editing 3 pet fields"""
    photo_url = StringField("Photo URL", validators=[Optional(),URL()])
    notes = TextAreaField("Notes", validators=[Optional()])
    available = BooleanField('Available', validators=[Optional()])