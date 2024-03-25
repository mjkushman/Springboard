-- Design a schema for Craigslist! Your schema should keep track of the following

-- - The region of the craigslist post (San Francisco, Atlanta, Seattle, etc)
-- - Users and preferred region
-- - Posts: contains title, text, the user who has posted, the location of the posting, the region of the posting
-- - Categories that each post belongs to


DROP DATABASE IF EXISTS craigslist_db;
CREATE DATABASE craigslist_db;
\c craigslist_db;

CREATE TABLE regions
(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
);

CREATE TABLE locations
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    region_id NOT NULL REFERENCES regions ON DELETE CASCADE,
    region_name REFERENCES regions(name) ON DELETE CASCADE,
);

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
    usrname VARCHAR(16) NOT NULL,
    preferred_region_id REFERENCES regions ON DELETE SET NULL,
    preferred_region_name REFERENCES regions(name) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    region_id REFERENCES regions ON DELETE CASCADE,
    location_id REFERENCES locations ON DELETE SET NULL,
    user_id NOT NULL REFERENCES users ON DELETE CASCADE,
    category_id REFERENCES categories ON DELETE SET NULL
)
