from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms import BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired, Email, Optional

states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

class AddSnackForm(FlaskForm):
    price = FloatField("Price in USD")
    name = StringField("Snack Name" ,validators=[InputRequired(message='Put in a snack name ya fool!')])
    email = StringField("Email", validators=[Optional(),Email(message='is that really your email?')])
    is_healthy = BooleanField("This snack is healthy")
    category = RadioField("Category",choices=[('ic','Ice Cream'),('chip','Potato Chips'),('choc','Chocolate')])
    group = SelectField("Group",choices=[('cold','cold Cream'),('bland','bland Chips'),('hot','hot Chocolate')])



class EmployeeForm(FlaskForm):
    name = StringField("Employee Name")
    state = SelectField("State", choices=[(st,st) for st in states])
    dept_code = SelectField("Department Code")




# ===== MY WORK ABOVE====

# class AddSnackForm(FlaskForm):
#     email = StringField("Email", validators=[Optional(), Email()])
#     name = StringField("Snack Name",  validators=[
#                        InputRequired(message="Snack Name can't be blank")])
#     price = FloatField("Price in USD")
#     quantity = IntegerField("How many?")
#     is_healthy = BooleanField("This is a healthy snack")

#     # category = RadioField("Category", choices=[
#     #                       ('ic', 'Ice Cream'),  ('chips', 'Potato Chips'),  ('candy', 'Candy/Sweets')])
#     category = SelectField("Category", choices=[
#                           ('ic', 'Ice Cream'),  ('chips', 'Potato Chips'),  ('candy', 'Candy/Sweets')])


# class EmployeeForm(FlaskForm):
#     name = StringField("Employee Name", validators=[
#                        InputRequired(message="Name cannot be blank")])
#     state = SelectField('State', choices=[(st, st) for st in states])
#     dept_code = SelectField("Department Code")
