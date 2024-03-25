"""Demo app using SQLAlchemy."""
from flask import Flask, request, redirect, render_template

# from models import db, connect_db, Pet
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db, Pet

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///petshop_db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "mysecurepassword"
# app.config['DEBUG_TB_INTERCEPTS_REDIRECTS'] = False
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route("/")
def list_pets():
    """shows list of all pets in db"""
    pets = Pet.query.all()
    return render_template("list.html", pets=pets)


@app.route("/<int:pet_id>")
def show_pet(pet_id):
    """show details about a single pet"""
    pet = Pet.query.get_or_404(pet_id)
    return render_template("detail.html", pet=pet)


@app.route("/", methods=["POST"])
def create_pet():
    name = request.form["name"]
    species = request.form["species"]
    hunger = request.form["hunger"]
    hunger = int(hunger) if hunger else None

    new_pet = Pet(name=name, species=species, hunger=hunger)
    db.session.add(new_pet)
    db.session.commit()

    return redirect(f"/{new_pet.id}")


@app.route("/species/<species_id>")
def show_pets_by_species(species_id):
    pets = Pet.get_by_species(species_id)
    return render_template("species.html", pets=pets, species=species_id)


###ORIGINAL CODE FOLLOWS ####

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sqla_intro'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SQLALCHEMY_ECHO'] = True

# connect_db(app)

# from flask_debugtoolbar import DebugToolbarExtension
# app.config['SECRET_KEY'] = "SECRET!"
# debug = DebugToolbarExtension(app)


# @app.route("/")
# def list_pets():
#     """List pets and show add form."""

#     pets = Pet.query.all()
#     return render_template("list.html", pets=pets)


# @app.route("/", methods=["POST"])
# def add_pet():
#     """Add pet and redirect to list."""

#     name = request.form['name']
#     species = request.form['species']
#     hunger = request.form['hunger']
#     hunger = int(hunger) if hunger else None

#     pet = Pet(name=name, species=species, hunger=hunger)
#     db.session.add(pet)
#     db.session.commit()

#     return redirect(f"/{pet.id}")


# @app.route("/<int:pet_id>")
# def show_pet(pet_id):
#     """Show info on a single pet."""

#     pet = Pet.query.get_or_404(pet_id)
#     return render_template("detail.html", pet=pet)
