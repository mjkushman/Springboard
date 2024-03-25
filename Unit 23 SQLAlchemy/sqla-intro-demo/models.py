from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


#models will go below here

class Pet(db.Model):
    # """Pet."""
    __tablename__ = 'pets'

    @classmethod
    def get_by_species(cls,species):
        return cls.query.filter_by(species=species).all()
    
    @classmethod
    def get_hungry(cls):
        return cls.query.filter(Pet.hunger>=20).all()

    def __repr__(self):
        p = self # We set self to a variable p so we won't have to type self so much.
        return f"<Pet id>={p.id} name={p.name} species={p.species} hunger={p.hunger}"
        
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    
    name = db.Column(db.String(50),
                     nullable=False, #pet name cannot be null
                     unique=True) #pet name must be unique
    
    species = db.Column(db.String(30),
                        nullable=True)
    
    hunger = db.Column(db.Integer,nullable=False,default=20)

    def greet(self):
        return f"Hi, I am {self.name} the {self.species}. It's nice to meet you."
    
    def feed(self,amount=10):
        """Update hunger based on the amount"""
        self.hunger -= amount
        self.hunger = max(self.hunger,0) #sets hunger to the higher of hunger or 0,  to prevent negative values






# """Demo file showing off a model for SQLAlchemy."""

# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()


# def connect_db(app):
#     """Connect to database."""

#     db.app = app
#     db.init_app(app)


# class Pet(db.Model):
#     """Pet."""

#     __tablename__ = "pets"

#     id = db.Column(db.Integer,
#                    primary_key=True,
#                    autoincrement=True)
#     name = db.Column(db.String(50),
#                      nullable=False,
#                      unique=True)
#     species = db.Column(db.String(30), nullable=True)
#     hunger = db.Column(db.Integer, nullable=False, default=20)

#     def greet(self):
#         """Greet using name."""

#         return f"I'm {self.name} the {self.species or 'thing'}"

#     def feed(self, units=10):
#         """Nom nom nom."""

#         self.hunger -= units
#         self.hunger = max(self.hunger, 0)

#     def __repr__(self):
#         """Show info about pet."""

#         p = self
#         return f"<Pet {p.id} {p.name} {p.species} {p.hunger}>"

#     @classmethod
#     def get_by_species(cls, species):
#         """Get all pets matching that species."""

#         return cls.query.filter_by(species=species).all()
