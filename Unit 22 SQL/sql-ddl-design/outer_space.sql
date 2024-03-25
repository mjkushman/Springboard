-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space


CREATE TABLE celestial_body_types
(
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL --expect Moon, Planet, Star
);

CREATE TABLE celestial_bodies
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT REFERENCES celestial_body_types(name) ON DELETE SET NULL
);

CREATE TABLE orbits
(
  id SERIAL PRIMARY KEY,
  host_id INTEGER REFERENCES celestial_bodies,
  satellite_id INTEGER REFERENCES celestial_bodies,
  orbital_period_in_years FLOAT NOT NULL
);

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbit_id INTEGER REFERENCES orbits,
  galaxy TEXT NOT NULL,
  moons TEXT[]
);

INSERT INTO celestial_body_types (name)
VALUES 
('Moon'),
('Planet'),
('Star');

INSERT INTO celestial_bodies (name,type)
VALUES
('The Sun','Star'),
('Earth','Planet'),
('Mars','Planet'),
('Venus','Planet'),
('Neptune','Planet'),
('Proxima Centauri b','Planet'),
('Proxima Centauri','Planet'),
('Gliese 876 b','Planet'),
('Gliese 876','Planet');

INSERT INTO orbits (host_id,satellite_id,orbital_period_in_years)
VALUES
(1,2,1.00),
(1,3,1.88),
(1,4,0.62),
(1,5,164.8),
(7,6,0.03),
(9,8,0.23);


INSERT INTO planets
  (name,orbit_id, galaxy, moons)
VALUES
  ('Earth', 1, 'Milky Way', '{"The Moon"}'),
  ('Mars', 2, 'Milky Way', '{"Phobos", "Deimos"}'),
  ('Venus', 3, 'Milky Way', '{}'),
  ('Neptune', 4, 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
  ('Proxima Centauri b', 5, 'Milky Way', '{}'),
  ('Gliese 876 b', 6, 'Milky Way', '{}');

--   INSERT INTO planets
--   (name, orbital_period_in_years, orbits_around, galaxy, moons)
-- VALUES
--   ('Earth', 1.00, 'The Sun', 'Milky Way', '{"The Moon"}'),
--   ('Mars', 1.88, 'The Sun', 'Milky Way', '{"Phobos", "Deimos"}'),
--   ('Venus', 0.62, 'The Sun', 'Milky Way', '{}'),
--   ('Neptune', 164.8, 'The Sun', 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
--   ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way', '{}'),
--   ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way', '{}');