-- 1 Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT  *
FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- 2 Precisamos de um relatório dos nomes dos clientes em ordem alfabética
-- que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2
-- e não inclua o cliente KENNETH no resultado.
SELECT  CONCAT(first_name,' ',last_name) AS 'Full Name'
FROM sakila.customer
WHERE customer.active = 0
AND customer.store_id = 2
AND customer.first_name <> 'KENNETH';
-- 3 O setor financeiro quer saber título descrição ano de lançamento e valor do custo de substituição
-- （ replacement_cost ） dos 100 filmes com o maior custo de substituição do valor mais alto ao mais baixo
-- entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18 00 dólares.
-- Em caso de empate ordene em ordem alfabética pelo título.
SELECT  film.title            AS 'Título'
       ,film.description      AS 'Descrição'
       ,film.release_year     AS 'Ano de lançamento'
       ,film.replacement_cost AS 'Custo de substituição'
FROM sakila.film
WHERE film.rating <> 'NC-17'
AND film.replacement_cost>=18
ORDER BY film.replacement_cost DESC, film.title ASC
LIMIT 100;
-- 4 Quantos clientes estão ativos e na loja 1 ?
SELECT  CONCAT(customer.first_name,' ',customer.last_name) AS 'Full Name'
       ,customer.email                                     AS 'E-mail'
       ,customer.customer_id                               AS 'ID'
FROM sakila.customer
WHERE customer.active = 1
AND customer.store_id = 1;
-- 5 Mostre todos os detalhes dos clientes que não estão ativos na loja 1 .
SELECT  CONCAT(customer.first_name,' ',customer.last_name) AS 'Full Name'
       ,customer.email                                     AS 'E-mail'
       ,customer.customer_id                               AS 'ID'
FROM sakila.customer
WHERE customer.active = 0
AND customer.store_id = 1;
-- 6 Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a
-- menor taxa de aluguel para que possamos fazer uma divulgação melhor desses filmes.
-- Em caso de empate ordene em ordem alfabética pelo título.
SELECT  film.title            AS 'Título'
       ,film.description      AS 'Descrição'
       ,film.release_year     AS 'Ano de lançamento'
       ,film.rental_duration  AS 'Duração do aluguel'
       ,film.rental_rate      AS 'Taxa de aluguel'
       ,film.length           AS 'Duração do filme'
       ,film.rating           AS 'Classificação'
       ,film.special_features AS 'Características especiais'
       ,film.last_update      AS 'Última atualização'
FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY title ASC
LIMIT 50;
-- USANDO LIKE
-- 1 Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT  *
FROM sakila.film
WHERE title like '%ace%';
-- 2 Mostre todos os detalhes dos filmes cujas descrições finalizam com china .
SELECT  *
FROM sakila.film
WHERE film.description like '%china';
-- 3 Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl
-- e o título finaliza com a palavra lord .
SELECT  *
FROM sakila.film
WHERE film.description like '%girl%';
-- 4 Mostre os dois casos em que a partir do 4° caractere no título do filme tem-se a palavra gon .
SELECT  *
FROM sakila.film
WHERE film.title like '___gon%';
-- 5 Mostre o único caso em que a partir do 4° caractere no título do filme
-- tem-se a palavra gon e a descrição contém a palavra Documentary .
SELECT  *
FROM sakila.film
WHERE film.title like '___gon%'
AND film.description like '%documentary%';
-- 6 Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .
SELECT  *
FROM sakila.film
WHERE film.title like '%academy' or film.title like 'mosquito%';
-- 6 Mostre os seis filmes que contêm AS palavras monkey e sumo em suas descrições.
SELECT  *
FROM sakila.film
WHERE film.description like '%monkey%'
AND film.description like '%sumo%';
-- Como você faria então para encontrar usando o IN todos os detalhes
-- sobre o aluguel dos clientes com os seguintes ids: 269 239 126 399 142?
SELECT  *
FROM sakila.rental
WHERE rental.customer_id IN (269, 239, 126, 399, 142);
-- Como encontraria todas AS informações sobre os endereços que estão registrados
-- nos distritos de QLD Nagasaki California Attika Mandalay Nantou e Texas?
SELECT  *
FROM sakila.address
WHERE address.district IN ("QLD", 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou' , 'Texas');