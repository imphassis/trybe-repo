-- 1 Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele
-- já atuou usando as tabelas actor e film_actor .
SELECT
  f.actor_id,
  f.film_id,
  CONCAT(a.first_name, ' ', a.last_name) AS full_name
FROM
  sakila.film_actor AS f
  INNER JOIN sakila.actor AS a ON f.actor_id = a.actor_id;

-- 2 Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos
-- funcionários do banco. Use as tabelas staff e address .
SELECT
  CONCAT(staff.first_name, "", staff.last_name) AS FULL_NAME,
  a.address
FROM
  sakila.staff AS staff
  INNER JOIN address AS a ON staff.address_id = a.address_id;

-- 3 Exiba o id do cliente, nome e email dos primeiros 100 clientes,
-- ordenados pelo nome em ordem decrescente, juntamente com o id do
-- endereço e o nome da rua onde o cliente mora.Essas informações podem
-- ser encontradas nas tabelas customer e address.
SELECT
  customer.customer_id,
  CONCAT(customer.first_name, ' ', customer.last_name) AS FULL_NAME,
  customer.email AS EMAIL,
  customer.address_id AS Address_ID,
  address.address AS 'Address'
FROM
  sakila.customer
  INNER JOIN sakila.address ON customer.address_id = address.address_id
ORDER BY
  customer.first_name
LIMIT
  100;

-- 4 Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito
-- da California e que contêm "rene" em seus nomes.As informações podem ser encontradas nas tabelas
-- address e customer.
SELECT
  CONCAT(c.first_name, ' ', c.last_name) AS FULL_NAME,
  c.email AS EMAIL,
  c.address_id AS Address_ID,
  a.address AS 'Address',
  a.district AS 'District'
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  c.first_name LIKE '%rene%';

-- 5 Exiba o nome e a quantidade de endereços dos clientes cadastrados.
-- Ordene seus resultados por nomes de forma decrescente.
-- Exiba somente os clientes ativos. As informações podem ser
-- encontradas na tabela address e customer .
SELECT
  c.first_name,
  count(a.address) AS 'Quantidade'
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  c.active = 1
GROUP BY
  c.first_name
ORDER BY
  c.first_name ASC;

-- 6 Monte uma query que exiba o nome , sobrenome e a média de valor ( amount )
-- paga aos funcionários no ano de 2006. Use as tabelas payment e staff .
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT
  staff.first_name,
  staff.last_name,
  AVG(payment.amount) AS 'Average'
FROM
  sakila.staff
  INNER JOIN sakila.payment ON staff.staff_id = payment.staff_id
GROUP BY
  staff.staff_id;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme ,
-- usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais
-- de um JOIN na mesma query .
SELECT
  a.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) AS full_name,
  film.film_id,
  film.title
FROM
  sakila.film_actor AS fa
  INNER JOIN sakila.actor AS a ON fa.actor_id = a.actor_id
  INNER JOIN sakila.film AS film ON fa.film_id = film.film_id;

-- 1 Queremos saber os ids e custos de substituição dos filmes
-- que possuem o mesmo custo de substituição.
SELECT
  t1.film_id,
  t1.title,
  t1.replacement_cost,
  t2.title,
  t2.film_id,
  t2.replacement_cost
FROM
  sakila.film AS t1,
  sakila.film AS t2
WHERE
  t1.replacement_cost = t2.replacement_cost;

-- 2 Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração.
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT
  t1.title,
  t1.rental_rate,
  t2.title,
  t2.rental_rate
FROM
  sakila.film AS t1,
  sakila.film AS t2
WHERE
  t1.length = t2.length;

-- UNION AND UNION ALL
-- 1 Todos os funcionários foram promovidos a atores.
-- Monte uma query que exiba a união da tabela staff com a tabela actor ,
-- exibindo apenas o nome e o sobrenome .
-- Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT
  first_name,
  last_name
FROM
  sakila.staff
UNION ALL
SELECT
  first_name,
  last_name
FROM
  sakila.actor;

-- 2 Monte uma query que una os resultados das tabelas customer e actor ,
-- exibindo os nomes que contêm a palavra "tracy" na tabela customer e os
-- que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT
  first_name,
  last_name
FROM
  sakila.customer
WHERE
  first_name LIKE "%tracy%"
UNION
SELECT
  first_name,
  last_name
FROM
  sakila.actor
WHERE
  first_name LIKE "%je%";

-- 3 Monte uma query que exiba a união dos cinco últimos nomes da tabela actor ,
-- o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer .
-- Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(
  SELECT
    first_name
  FROM
    sakila.actor
  ORDER BY
    first_name DESC
  LIMIT
    5
)
UNION
(
  SELECT
    first_name
  FROM
    sakila.staff
  LIMIT
    1
)
UNION
(
  SELECT
    first_name
  FROM
    sakila.customer
  LIMIT
    5 OFFSET 15
)
ORDER BY
  first_name ASC;

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes
-- e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo
--  feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
SELECT
  first_name,
  last_name
FROM
  sakila.customer
UNION
SELECT
  first_name,
  last_name
FROM
  sakila.actor
ORDER BY
  first_name ASC,
  last_name ASC
LIMIT
  15 OFFSET 60;

-- EXISTS
-- 1 Usando o EXISTS na tabela books_lent e books ,
-- exiba o id e título dos livros que ainda não foram emprestados.
SELECT
  b.id,
  b.title
FROM
  hotel.Books AS b
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.Books_Lent AS l
    WHERE
      b.id = l.book_id
  );

-- 2 Usando o EXISTS na tabela books_lent e books , exiba o id e
--  título dos livros estão atualmente emprestados e que contêm
-- a palavra "lost" no título.
SELECT
  b.id,
  b.title
FROM
  hotel.Books AS b
WHERE
  EXISTS (
    SELECT
      *
    FROM
      hotel.Books_Lent AS l
    WHERE
      b.id = l.book_id
      AND l.returned = 0
      AND b.title LIKE "%lost%"
  );

-- 3 Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT
  c.Name
FROM
  hotel.Customers AS c
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.CarSales AS s
    WHERE
      c.CustomerId = s.CustomerId
  );

-- 4 Usando o comando EXISTS em conjunto com JOIN e as tabelas cars ,
-- customers e carsales, exiba o nome do cliente e o modelo do carro
-- de todos os clientes que fizeram compras de carros.
SELECT
  Customers.Name AS 'Customer Name',
  Cars.Name AS 'Car Name',
  Customers.CustomerId
FROM
  hotel.CarSales
  INNER JOIN Customers ON Customers.CustomerId = CarSales.CustomerID
  INNER JOIN Cars ON Cars.Id = CarSales.CarID
WHERE
  EXISTS (
    SELECT
      *
    FROM
      hotel.Customers
    WHERE
      Customers.CustomerId = CarSales.CustomerID
  );