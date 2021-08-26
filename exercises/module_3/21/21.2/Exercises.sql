-- 1 Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales )
-- e internacionais ( international_sales ) de cada filme.
SELECT
  m.title AS 'Título',
  b.domestic_sales AS 'Vendas Nacionais',
  b.international_sales AS 'Vendas Internacionais'
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id;

-- 2 Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada
-- filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas
-- nacionais ( domestic_sales ).
SELECT
  m.title AS 'Título',
  b.domestic_sales AS 'Vendas Nacionais',
  b.international_sales AS 'Vendas Internacionais'
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
  b.international_sales > b.domestic_sales;

-- 3 Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
  m.title AS 'Title',
  b.rating AS 'Rating'
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
ORDER BY
  b.rating DESC;

-- 4 Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas,
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz
-- nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  t.id AS 'Theater ID',
  t.name AS 'Theater Name',
  t.location,
  m.id AS 'Movie ID',
  m.title AS 'Movie'
FROM
  Pixar.Theater AS t
  LEFT JOIN Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY
  t.name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes,
--  mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes
--  filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  t.id AS 'Theater ID',
  t.name AS 'Theater Name',
  t.location,
  m.title AS 'Movie',
  m.director AS 'Movie Director',
  m.year AS 'Movie Year',
  m.length_minutes AS 'Movie Length',
  b.rating AS 'Movie Rating',
  b.domestic_sales AS 'Movie Domestic Sales',
  b.international_sales AS 'Movie International Sales'
FROM
  Pixar.Theater AS t
  RIGHT JOIN Pixar.Movies AS m ON m.theater_id = t.id
  LEFT JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
ORDER BY
  t.name ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
-- que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT
  m.title AS 'Movie Title',
  b.rating AS 'Rating'
FROM
  (
    SELECT
      *
    FROM
      Pixar.BoxOffice AS b
    WHERE
      b.rating > 7.5
  ) AS b
  INNER JOIN Pixar.Movies AS m ON m.id = b.movie_id;

SELECT
  m.title AS Movie_Title,
  b.rating AS Rating
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
  b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
--  que retornem as avaliações dos filmes lançados depois de 2009.
SELECT
  m.title,
  m.year,
  b.rating
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
  b.movie_id IN (
    SELECT
      id
    FROM
      Pixar.Movies
    WHERE
      year > 2009
  );

SELECT
  m.title,
  m.year,
  b.rating
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
  m.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização
-- dos cinemas que possuem filmes em cartaz.
SELECT
  t.name,
  t.location
FROM
  Pixar.Theater AS t
WHERE
  EXISTS (
    SELECT
      *
    FROM
      Pixar.Movies AS m
    WHERE
      m.theater_id = t.id
  );

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização
--  dos cinemas que não possuem filmes em cartaz.
SELECT
  t.name,
  t.location
FROM
  Pixar.Theater AS t
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      Pixar.Movies AS m
    WHERE
      m.theater_id = t.id
  );

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações
-- dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT
  m.title,
  m.director,
  m.year,
  m.length_minutes,
  b.rating,
  b.domestic_sales,
  b.international_sales
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
  b.rating IN (
    SELECT
      b.rating
    FROM
      Pixar.BoxOffice AS b
    WHERE
      b.rating > 8
  );

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração
-- dos filmes que possuem o mesmo diretor.
SELECT
  m1.title,
  m1.length_minutes,
  m1.director,
  m2.title,
  m2.length_minutes,
  m2.director
FROM
  Pixar.Movies AS m1,
  Pixar.Movies AS m2
WHERE
  m1.director = m2.director
  AND m1.title <> m2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN
-- que retornem o título dos filmes que arrecadaram 500 milhões ou mais,
-- e que possuem duração maior que 110 minutos.
SELECT
  m.title
FROM
  (
    SELECT
      *
    FROM
      Pixar.BoxOffice AS b
    WHERE
      (b.domestic_sales + b.international_sales) > 500000000
  ) AS b
  INNER JOIN Pixar.Movies AS m ON b.movie_id = m.id
WHERE
  m.length_minutes > 110;

SELECT
  m.title
FROM
  Pixar.BoxOffice AS b
  INNER JOIN Pixar.Movies AS m ON b.movie_id = m.id
WHERE
  b.domestic_sales + b.domestic_sales > 500000000
  AND m.length_minutes > 110;