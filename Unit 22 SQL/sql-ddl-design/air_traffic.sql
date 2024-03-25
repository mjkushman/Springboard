-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE airlines
(
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE locations
(
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE passengers 
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT
);

CREATE TABLE flights
(
  id SERIAL PRIMARY KEY,
  airline_id INTEGER REFERENCES airlines ON DELETE CASCADE,
  from_location_id INTEGER REFERENCES locations ON DELETE CASCADE,
  to_location_id INTEGER REFERENCES locations ON DELETE CASCADE,
  departure TIMESTAMP,
  arrival TIMESTAMP
);



CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline TEXT NOT NULL,
  from_location_id INTEGER REFERENCES locations NOT NULL,
  to_location_id INTEGER REFERENCES locations NOT NULL,
  flight_id INTEGER REFERENCES flights ON DELETE CASCADE
);



INSERT INTO airlines (name)
VALUES
('United'), --1
('British Airways'), --2
('Delta'), --3
('TUI Fly Belgium'), --4
('Air China'), --5
('American Airlines'), --6
('Avianca Brasil'); --7

INSERT INTO locations (city,country)
VALUES
('Washington DC','United States'),
('Tokyo', 'Japan'),
('Los Angeles', 'United States'),
('Seattle', 'United States'),
('Paris', 'France'),
('Dubai', 'UAE'),
('New York', 'United States'),
('Cedar Rapids', 'United States'),
('Charlotte', 'United States'),
('Sao Paolo', 'Brazil'),
('London', 'United Kingdom'),
('Las Vegas', 'United States'),
('Mexico City', 'Mexico'),
('Casablanca', 'Morocco'),
('Beijing', 'China'),
('Chicago', 'United States'),
('New Orleans', 'United States'),
('Santiago', 'Chile');

INSERT INTO passengers (first_name)
VALUES
('Jennifer'),('Thadeus'),('Sonja'),('Waneta'),('Berkie'),('Alvin'),('Cory');

INSERT INTO flights (airline_id, from_location_id, to_location_id)
VALUES(1,1,2),(2,2,1),(1,2,3),(3,2,1),(3,1,2),(2,3,4),(4,2,6),(5,6,4),(4,5,1);




INSERT INTO tickets
  (first_name, last_name, seat, departure, arrival, airline, from_location_id, to_location_id, flight_id)
VALUES
  ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 1,1,3),
  ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 2,2,3),
  ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 3,2,1),
  ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 1,4,3),
  ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 3,4,5),
  ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 2,4,3),
  ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 4,5,3),
  ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 5,4,2),
  ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 3,4,5),
  ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 6,4,1);


-- INSERT INTO tickets
--   (first_name, last_name, seat, departure, arrival, airline, from_city, from_country, to_city, to_country)
-- VALUES
--   ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 'Washington DC', 'United States', 'Seattle', 'United States'),
--   ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom'),
--   ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
--   ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
--   ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco'),
--   ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 'Dubai', 'UAE', 'Beijing', 'China'),
--   ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 'New York', 'United States', 'Charlotte', 'United States'),
--   ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
--   ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States'),
--   ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');