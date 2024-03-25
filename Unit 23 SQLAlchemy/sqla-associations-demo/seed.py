"""seed file for employee and departments tables"""

from models import Department, Employee, db
from app import app

db.drop_all()
db.create_all()

d1 = Department(dept_code='mktg',dept_name='Marketing',phone='555-555-5555')
d2 = Department(dept_code='acct',dept_name='Accounting',phone='555-555-6666')
d3 = Department(dept_code='dthr',dept_name='Death Eaters',phone='555-666-1234')
d4 = Department(dept_code='aurr',dept_name='Aurors',phone='221-123-7755')
river = Employee(name='River Bottom',state='CA',dept_code='mktg')
james = Employee(name='James Potter',state='GA',dept_code='acct')
lilly = Employee(name='Lilly Potter',state='AO',dept_code='aurr')
snape = Employee(name='Severous Snape',state='BO',dept_code='dthr')
ron = Employee(name='Ronald Weasley',state='ME',dept_code='dthr')

db.session.add_all([d1,d2,d3,d4])
db.session.commit()

db.session.add_all([river,james,lilly,snape,ron])
db.session.commit()