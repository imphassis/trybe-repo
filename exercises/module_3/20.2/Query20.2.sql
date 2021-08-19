-- Query to show all the movies registered IN the DB
SELECT  *
FROM film;
-- Query to showw only the name release year AND rating of the movies registered IN the DB
SELECT  title
       ,release_year
       ,rating
FROM film;
-- Query to show how many movies are registered IN the DB
SELECT  COUNT(*)
FROM film;
-- Query to show unique lastNames of the actors registered IN the DB
SELECT  distinct last_name
FROM actor;
-- Query to show all languages excpet english
SELECT  *
FROM language
WHERE name != 'English';

SELECT  *
FROM film ;


-- Query to show movies by order [length in ASC, replacement_cost in Desc]
SELECT  title            AS 'Title'
       ,release_year     AS 'Release Year'
       ,length           AS 'Length'
       ,rating           AS 'Rating'
       ,replacement_cost AS 'Replacement Cost'
FROM film
ORDER BY length ASC, replacement_cost DESC LIMIT 20;