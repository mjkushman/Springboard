from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, EmailField, TextAreaField
from wtforms.validators import InputRequired, Length

class RegistrationForm(FlaskForm):
    """ The main registration form"""

    username = StringField("Username", validators=[Length(min=3,max=20), InputRequired()])
    password = PasswordField("Password", validators=[InputRequired()])
    email = EmailField("Email", validators=[Length(max=50),InputRequired()])
    first_name = StringField("First Name", validators=[Length(max=30), InputRequired()])
    last_name = StringField("Last Name", validators=[Length(max=30), InputRequired()])

class LoginForm(FlaskForm):
    """ let user sign in after having registered """

    username = StringField("Username", validators=[Length(min=3,max=20), InputRequired()])
    password = PasswordField("Password", validators=[InputRequired()])

class AddFeedbackForm(FlaskForm):
    """ Form for users to submit their feedback """

    title = StringField("Title", validators=[InputRequired(), Length(max=100)])
    content = TextAreaField("Your Feedback", validators=[InputRequired()])

class EditFeedbackForm(FlaskForm):
    """ Form for users to edit feedback """

    title = StringField("Title", validators=[InputRequired(), Length(max=100)])
    content = TextAreaField("Your Feedback", validators=[InputRequired()])