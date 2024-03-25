                              Table "public.owners"
   Column   |  Type   | Collation | Nullable |              Default               
------------+---------+-----------+----------+------------------------------------
 id         | integer |           | not null | nextval('owners_id_seq'::regclass)
 first_name | text    |           |          | 
 last_name  | text    |           |          | 
Indexes:
    "owners_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "vehicles" CONSTRAINT "vehicles_owner_id_fkey" FOREIGN KEY (owner_id) REFERENCES owners(id)

joins_exercise=# \d vehicles
                             Table "public.vehicles"
  Column  |  Type   | Collation | Nullable |               Default                
----------+---------+-----------+----------+--------------------------------------
 id       | integer |           | not null | nextval('vehicles_id_seq'::regclass)
 make     | text    |           |          | 
 model    | text    |           |          | 
 year     | integer |           |          | 
 price    | real    |           |          | 
 owner_id | integer |           |          | 
Indexes:
    "vehicles_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "vehicles_owner_id_fkey" FOREIGN KEY (owner_id) REFERENCES owners(id)


-- write your queries here

--Join the two tables so that every column and record appears, regardless of if there is not an owner_id .
SELECT * FROM owners o FULL JOIN vehicles v ON o.id = v.owner_id;


-- Count the number of cars for each owner. 
-- Display the owners first_name , last_name and count of vehicles. 
-- The first_name should be ordered in ascending order. 
SELECT o.first_name, o.last_name, count(v.id) as num_cars FROM owners o JOIN vehicles v ON o.id = v.owner_id GROUP BY o.id ORDER BY o.first_name ASC;


-- Count the number of cars for each owner and display the average price for each of the cars as integers. 
-- Display the owners first_name , last_name, average price and count of vehicles. 
-- The first_name should be ordered in descending order. 
-- Only display results with more than one vehicle and an average price greater than 10000. 
SELECT o.first_name, o.last_name, COUNT(v.id) AS num_cars, ROUND(AVG(v.price)) as avg_price 
FROM owners o JOIN vehicles v ON o.id = v.owner_id 
GROUP BY o.id
HAVING COUNT(v.id) > 1 AND AVG(v.price) > 10000
ORDER BY o.first_name DESC;