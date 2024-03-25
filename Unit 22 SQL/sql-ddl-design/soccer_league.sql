-- Design a schema for a simple sports league. Your schema should keep track of

-- - All of the teams in the league
-- - All of the goals scored by every player for each game
-- - All of the players in the league and their corresponding teams
-- - All of the referees who have been part of each game
-- - All of the matches played between teams
-- - All of the start and end dates for season that a league has
-- - The standings/rankings of each team in the league (This doesn’t have to be its own table if the data can be captured somehow).


DROP DATABASE IF EXISTS soccer_league_db;
CREATE DATABASE soccer_league_db;
\c soccer_league_db;

CREATE TABLE teams
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
);

CREATE TABLE players
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT DEFAULT NULL,
    team_id REFERENCES teams ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE goals
(
    id SERIAL PRIMARY KEY,
    player_id TEXT REFERENCES players ON DELETE SET NULL, -- set null instead of cascade to answer questions like "how many goals were scored in the league?"
    team_id TEXT REFERENCES teams ON DELETE SET NULL,
);

CREATE TABLE referees
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
);

CREATE TABLE seasons
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    start_date DATE,
    end_date DATE,
    playoff_date DATE,
    firstplace_team_id REFERENCES teams ON DELETE SET NULL DEFAULT NULL,
    lastplace_team_id REFERENCES teams ON DELETE SET NULL DEFAULT NULL,
);

CREATE TABLE matches
(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    home_team_id NOT NULL REFERENCES teams ON DELETE CASCADE,
    home_team_score INTEGER DEFAULT 0,
    away_team_id NOT NULL REFERENCES teams ON DELETE CASCADE,
    away_team_score INTEGER DEFAULT 0,
    winner_id REFERENCES teams DEFAULT NULL ON DELETE CASCADE,
    is_tie BOOLEAN DEFAULT true,
    referee_id REFERENCES referees ON DELETE SET NULL,
    season_id REFERENCES seasons ON DELETE CASCADE,
);


INSERT INTO teams (name)
VALUES ('Hawks'),('Tigers'),('Bobcats'),('Warriors'),('Salamanders'),('Richmond United');

INSERT INTO players (first_name, last_name)
VALUES ('Randy','Rudolph'), ('Karl','Marx'), ('Christian','Bale'), ('Steve','McQueen');

INSERT INTO goals (team_id,player_id)
VALUES ('1','2'), ('1','1'), ('2','3'), ('2','4'), ('1','2')

INSERT INTO referees (first_name, last_name)
VALUES ('James','Dean'), ('Michelle','Phifer')

INSERT INTO seasons (name, start_date, end_date, playoff_date)
VALUES ('Summer 18 and Under 2023',2023-06-01, 2023-08-15, 2023-08-15),
('Winter 18 and Under 2024',2023-11-01, 2024-2-15, 2024-02-15);

INSERT INTO matches (date, home_team_id,home_team_score,away_team_id,away_team_id,winner_id,is_tie,referee_id,season_id)
VALUES (2023-06-07,1,100,2,0,1,false,2,1)


