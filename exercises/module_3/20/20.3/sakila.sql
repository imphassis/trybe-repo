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
-- 1 Mostre o nome sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks crawford henry boyd
-- mason morales e kennedy ordenados por nome em ordem alfabética.
SELECT  customer.first_name AS 'Nome'
       ,customer.last_name  AS 'Sobrenome'
       ,customer.email      AS 'E-mail'
FROM sakila.customer
WHERE customer.last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY customer.first_name ASC;
-- 2 Mostre o e-mail dos clientes com os address_id 172 173 174 175 e 176 ordenados em ordem alfabética.
SELECT  customer.email AS 'E-mail'
       ,customer.address_id 'Address ID'
FROM sakila.customer
WHERE customer.address_id IN (172, 173, 174, 175, 176)
ORDER BY customer.email asc;
-- 3 Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que
-- no banco de dados AS datas estão armazenadas no formato ano/mês/dia diferente do
-- formato brasileiro que é dia/mês/ano .
SELECT  *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-010' AND '2005-08-01';
-- 4 Mostre o título ano de lançamento e duração do empréstimo de todos os filmes com a duração de
-- empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de
-- empréstimo primeiro. Em caso de empate ordene em ordem alfabética pelo título.
SELECT  film.title           AS 'Título'
       ,film.release_year    AS 'Ano de lançamento'
       ,film.rental_duration AS 'Duração do empréstimo'
FROM sakila.film
WHERE film.rental_duration BETWEEN 3 AND 6
ORDER BY film.rental_duration DESC , film.title ASC;
-- 5 Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para AS
-- classificações indicativas G PG e PG-13 . Os resultados devem estar ordenados por título.
SELECT  film.title  AS 'Título'
       ,film.rating AS 'Classificação'
FROM sakila.film
WHERE film.rating IN ('G', 'PG', 'PG-13')
ORDER BY film.title ASC
LIMIT 500;
-- 1 Quantos pagamentos temos com a data de retorno 2005-05-25 ?
-- Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT  COUNT(*) AS 'Quantidade de Pagamentos'
FROM sakila.payment
WHERE payment.payment_date like '%2005-05-25%';
-- 2 Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?
SELECT  COUNT(*) AS 'Quantidade de Pagamentos'
FROM sakila.payment
WHERE DATE(payment.payment_date) BETWEEN '2005-07-01' AND '2005-08-22';
-- 3 Usando a tabela rental extraia data ano mês dia hora minuto e segundo dos registros com rental_id = 10330.
-- Utilize a coluna rental_date para extrair AS informações.
SELECT  rental.rental_date         AS 'Data'
       ,YEAR(rental.rental_date)   AS 'Ano'
       ,MONTH(rental.rental_date)  AS 'Mês'
       ,DAY(rental.rental_date)    AS 'Dia'
       ,HOUR(rental.rental_date)   AS 'Hora'
       ,MINUTE(rental.rental_date) AS 'Minuto'
       ,SECOND(rental.rental_date) AS 'Segundo'
FROM sakila.rental
WHERE rental.rental_id = 10330;
-- 4 Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .
SELECT  *
FROM sakila.payment
WHERE DATE(payment.payment_date) > '2005-07-28'
AND HOUR(payment.payment_date) >= '22'
ORDER BY payment.payment_date ASC;