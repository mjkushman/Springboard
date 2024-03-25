from flask import Flask, render_template,request
from flask_debugtoolbar import DebugToolbarExtension
from stories import story


app = Flask(__name__)
app.config["SECRET_KEY"] = "mysecurepassword"
debug = DebugToolbarExtension(app)  # instantiates toolbar


prompts = story.prompts
story_template = story.template


@app.route("/")
def homepage():
    return render_template('home.html',questions = prompts)

@app.route("/story")
def show_story():
    submissions = {}
    #create a dict of prompt:answer called submissions
    for prompt in prompts: 
        submissions[prompt] = request.args[prompt]
    generated_story = story.generate(submissions)
    #pass the generated story and submissions dict to the rendered page
    return render_template('story.html',submissions = submissions, story = generated_story)
