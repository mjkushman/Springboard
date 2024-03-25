from flask import Flask, request, render_template, redirect, flash,jsonify
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

app = Flask(__name__)

app.config["SECRET_KEY"] = "mysecurepassword"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
debug = DebugToolbarExtension(app)  # instantiates toolbar

MOVIES = {'Amadeus','Water Boy','Water World'}


@app.route("/")
def homepage():
    return render_template("home.html")


@app.route("/hello/<name>")
def say_hello(name):
    return render_template("hello.html")


@app.route("/goodbye")
def say_bye():
    return render_template('goodbye.html')


@app.route("/search")
def search():
    print(request.args)
    term = request.args["term"]
    return f"<h1>SEARCH PAGE.</h1> <p>The search term is {term}</p>"


@app.route("/post", methods=["POST"])
def post_demo():
    return "You made a post request"


@app.route("/add-comment")
def add_comment_form():
    return """
        <h1> Add a comment </h1>
        <form method="POST">
            <input type='text' placeholder='comment' name='comment'/> 
            <input type='text' placeholder='username' name='username'/> 
            <button>Submit</button>
        </form>
    """


@app.route("/add-comment", methods=["POST"])
def save_comments():
    comment = request.form["comment"]
    username = request.form["username"]
    print(request.form)
    return f"""
        <h1>Saved your comment!</h1>
        <p> {username} commented: {comment}</p>
    """


@app.route("/r/<subreddit>")
def show_subreddit(subreddit):
    return f"<h1> Browsing the {subreddit} subreddit</h1>"


# variables
POSTS = {
    1: "I like burgers",
    2: "Big boobies bouncing boobily",
    3: "Who let the dogs out",
}


@app.route("/posts/<int:post_id>")
def find_post(post_id):
    post = POSTS.get(post_id, "post not found")
    return f"<p>{post}</p>"


# multiple variables
@app.route("/r/<subreddit>/comments/<post_id>")
def show_comments(subreddit, post_id):
    return f"<h1> Browsing comments of {post_id} under the {subreddit} subreddit</h1>"


# random number route dynamic variable


@app.route("/lucky")
def lucky_number():
    num = randint(1, 5)
    return render_template("lucky.html", lucky_num=num)


@app.route("/form")
def show_form():
    return render_template("form.html")


@app.route("/form-2")
def show_form_2():
    return render_template("form_2.html")


COMPLIMENTS = ["cool", "sexy", "hot", "dummy", "smart", "tenacious", "tall"]


@app.route("/greet")
def get_greeting():
    nice_thing = choice(COMPLIMENTS)
    username = request.args["username"]
    return render_template("greet.html", username=username, compliment=nice_thing)


@app.route("/greet-2")
def get_greeting_2():
    username = request.args["username"]
    wants = request.args.get("wants_compliments")
    nice_things = sample(COMPLIMENTS, 3)
    return render_template(
        "greet_2.html",
        username=username,
        compliments=nice_things,
        wants_compliments=wants,
    )

@app.route("/spell/<word>")
def spell_word(word):
    caps_word = word.upper()
    return render_template("spellword.html", word=caps_word)

@app.route('/old-homepage')
def redirect_to_home():
    """redirects to new homepage"""
    flash("That page has moved! This is the new homepage.")
    return redirect ('/')

@app.route('/movies')
def show_all_movies():
    """Show list of all movies in our fake MOVIES db"""
    return render_template('movies.html',movies = MOVIES)

@app.route('/movies/new', methods = ["Post"])
def add_movie():
    title = request.form['title']
    #Add to pretend DB MOVIES
    if title in MOVIES:
            flash("Movie already exists! Please add a different movie",'error')
    else:
        MOVIES.add(title)
        flash("Success! Added your movie",'success') #flash messaging
    import pdb
    pdb.set_trace()
    return redirect ('/movies')

@app.route('/movies/json')
def get_movies_json():
    json_obj = jsonify(list(MOVIES))
    return json_obj