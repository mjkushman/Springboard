-- Comments in SQL Start with dash-dash --
                                 Table "public.analytics"
     Column      |  Type   | Collation | Nullable |                Default                
-----------------+---------+-----------+----------+---------------------------------------
 id              | integer |           | not null | nextval('analytics_id_seq'::regclass)
 app_name        | text    |           | not null | 
 category        | text    |           | not null | 
 rating          | real    |           |          | 
 reviews         | integer |           |          | 
 size            | text    |           |          | 
 min_installs    | integer |           |          | 
 price           | real    |           |          | 
 content_rating  | text    |           |          | 
 genres          | text[]  |           |          | 
 last_updated    | date    |           |          | 
 current_version | text    |           |          | 
 android_version | text    |           |          | 
Indexes:
    "analytics_pkey" PRIMARY KEY, btree (id)

-- Fnd app with ID 1880
SELECT * FROM analytics WHERE id = 1880;

-- Find ID and app name for all apps last updated on Aug 1 2018
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

--Count number of apps in each category
SELECT category, count (*) FROM analytics GROUP BY category;

-- Find the top 5 most-reviewed apps ad the numer of reviews for each
SELECT app_name, reviews FROM analytics ORDER BY reviews desc LIMIT 5; 

-- The app with the most reviews with a rating greater than or equal to 4.8
SELECT app_name, reviews, rating FROM analytics WHERE rating >= 4.8 ORDER BY reviews desc LIMIT 1;

-- Average rating for each category ordered by highest rated to lowest
SELECT category, avg(rating) as avg_rating FROM analytics GROUP BY category ORDER BY avg_rating desc;

-- Find name, price, rating of the most expwnsive app with a rating less than 3
SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price desc LIMIT 1;

-- Find all apps with a min install 50 or less, that have a rating
SELECT app_name, min_installs, rating FROM analytics WHERE rating IS NOT null AND min_installs <= 50 ORDER BY rating desc;

-- Find names of all apps that are rated less than 3 and have at least 10,000 reviews
SELECT app_name, rating, reviews FROM analytics WHERE rating < 3 AND reviews >= 10000;

--Find the top 10 most reviewed apps that cast between 10 cents and 1 dollar
SELECT app_name, price, reviews FROM analytics WHERE price BETWEEN 0.1 AND 1 ORDER BY reviews desc LIMIT 10;

-- Find the most out of date app
SELECT app_name, last_updated FROM analytics WHERE last_updated = ( SELECT MIN (last_updated) FROM analytics);

-- Count all the reviews in the store
SELECT count(reviews) FROM analytics;

-- Find the app with the highest proportion of min_installs to reviews, among apps that have been installed at least 100,000 times. Display name, number of reviews, min_installs, and proportion
SELECT app_name, reviews, min_installs, (min_installs/reviews) as install_rev FROM analytics WHERE min_installs > 100000 ORDER BY install_rev desc LIMIT 1;