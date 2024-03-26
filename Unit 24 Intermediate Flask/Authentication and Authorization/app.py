from flask import Flask, render_template, redirect, request, flash, session
from models import db, connect_db, User, Feedback
from flask_debugtoolbar import DebugToolbarExtension
from forms import RegistrationForm, LoginForm, AddFeedbackForm, EditFeedbackForm


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///authentication_authorization_db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "mypassword"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['TESTING'] = True


with app.app_context():
    connect_db(app)
    db.create_all()


@app.route('/')
def home():
    return redirect('/register')


@app.route('/register', methods=['GET','POST'])
def register():
    form = RegistrationForm()
    if session.get('username'):
        user = User.query.get(session.get('username'))
        return render_template('register.html', form=form, user = user)
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data
        new_user = User.register(username, password, email, first_name, last_name)

        db.session.add(new_user)
        db.session.commit()
        flash(f'Welcome {new_user.first_name}!')
        session['username'] = new_user.username
        return redirect(f'/users/{new_user.username}')
    else:
        return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
        print(user)
        if user:
            flash(f'Welcome back {user.first_name}', 'success')
            session['username'] = user.username
            return redirect(f'/users/{user.username}')
        else:
            form.username.errors = ['Incorrect username / password combination']
    return render_template('login.html', form=form)


@app.route('/users/<username>', methods=['GET'])
def user_detail(username):
    if session.get('username'):
        user = User.query.get(username)
        return render_template('user.html', user=user)
    flash('Please log in first.', 'danger')
    return redirect('/')


@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username')
    flash('Goodbye!')
    return redirect('/')


@app.route('/users/<username>/delete', methods=['POST'])
def delete(username):
    """Remove the user from the database and make sure to also delete all of their feedback. Clear any user information in the session and redirect to /.  Make sure that only the user who is logged in can successfully delete their account."""

    #TODO
    user = User.query.get(username)
    db.session.delete(user)
    db.session.commit()
    session.clear()
    flash(f'Deleted {user.first_name}', 'danger')
    return redirect('/')


@app.route('/users/<username>/feedback/add', methods=['GET','POST'])
def add_feedback(username):
    """GET:  Display a form to add feedback. Make sure that only the user who is logged in can see this form.
        POST: Add a new piece of feedback and redirect to /users/<username>  -- Make sure that only the user who is logged in can successfully add feedback.
    """
    form = AddFeedbackForm()
    user = User.query.get(session.get('username'))

    if not user:
        flash('Please log in first', 'danger')
        return redirect('/')

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        
        feedback = Feedback(title=title, content=content, username=username)
        db.session.add(feedback)
        db.session.commit()
        return redirect (f'/users/{username}')
    return render_template('feedback.html',form=form, user=user)

# Update a piece of feedback
@app.route('/feedback/<feedbackid>/update', methods=['GET','POST'])
def update_feedback(feedbackid):
    """ GET: Display a form to add feedback. Make sure that only the user who is logged in can see this form.
        POST:  Update a specific piece of feedback and redirect to /users/<username> -- Make sure that only the user who has written that feedback can update it.
    """
    user = User.query.get(session.get('username'))
    feedback = Feedback.query.get(feedbackid)
    form = EditFeedbackForm(obj=feedback) # instantiate form
    
    if form.validate_on_submit():
        feedback.title=form.title.data
        feedback.content=form.content.data
        db.session.add(feedback)
        db.session.commit()
        return redirect(f'/users/{user.username}')

    return render_template('feedback.html', form=form, user=user)


@app.route('/feedback/<feedbackid>/delete', methods=['POST'])
def delete_feedback(feedbackid):
    """Delete a specific piece of feedback and redirect to /users/<username>  -- Make sure that only the user who has written that feedback can delete it. """
    
    username = session.get('username')
    feedback = Feedback.query.get(feedbackid)
    #check to make sure this user is deleting their own feedback.
    if feedback.user.username == username:
        db.session.delete(feedback)
        db.session.commit()
        return redirect(f'/users/{username}')
    flash('You\'re not alowed to do that.', 'danger')
    return redirect('/')