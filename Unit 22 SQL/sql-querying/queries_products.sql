-- Comments in SQL Start with dash-dash --
-- Adds a product called 'chair' with price of 44.00 and fannot be returned
INSERT INTO products (name, price, can_be_returned) VALUES ('chair',44.00,false); 

-- add a product named 'stool' with price 25.9 and can be returned
INSERT INTO products (name, price, can_be_returned) VALUES ('stool',25.99,true);

-- Adds a product named 'table' with price of 124 and cannot be returned
INSERT INTO products (name, price, can_be_returned) VALUES ('table',124.00,false);

-- displays all rows
SELECT * FROM products;

-- Displays all names of products
SELECT name FROM products;

-- Displays all then ames and prices of products
SELECT name, price FROM products;

-- Adds a product called 'lamp' with a price of 666
INSERT INTO products (name, price, can_be_returned) VALUES ('lamp',666,false);

-- Dsiplay only products that can be returned
SELECT * FROM products WHERE can_be_returned = true;

-- Display only products with price less than 44
SELECT * FROM products WHERE price < 44.00;

-- Display only products with price less between 22.50 and 99.99
SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;

-- reduce price of all products by 20
UPDATE products SET price = price - 20;

-- Remove all products with price under 25
DELETE FROM products WHERE price < 25;

-- Increase price of all products by 20
UPDATE products SET price = price + 20;

-- Make everything returnable
UPDATE products SET can_be_returned = true;