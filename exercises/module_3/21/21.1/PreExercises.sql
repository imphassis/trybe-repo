-- Para Fixar
-- Agora, vamos fixar os aprendizados com alguns desafios:
-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
-- Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT
  UCASE('Trybe');

SELECT
  REPLACE (
    'Você já ouviu falar do DuckDuckGo?',
    'DuckDuckGo',
    'Google'
  );

SELECT
  LENGTH('Uma frase qualquer');

SELECT
  SUBSTRING(
    'A linguagem JavaScript está entre as mais usadas',
    12,
    11
  );

SELECT
  LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- 1 Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada
-- 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '.
-- Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme".
--  Não esqueça de usar um alias para renomear a coluna da condicional.
-- 2 Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating )
-- e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo
-- com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
SELECT
  film_id AS 'ID',
  title AS 'Título',
  IF (
    title = 'ACE GOLDFINGER',
    'Já assisti a esse filme',
    'Não conheço o filme'
  ) AS 'Conheço o filme?'
FROM
  sakila.film;

SELECT
  title,
  rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'Público Alvo'
FROM
  sakila.film;

--  Dica: Números pares são aqueles que podem ser divididos em duas partes iguais.
-- Ou seja, são aqueles cuja divisão por 2 retorna resto 0.
-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é
-- par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de
-- 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
-- Utilizando o resultado anterior, responda à seguinte pergunta:
-- temos lugares sobrando? Se sim, quantos?
SELECT
  IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Ímpar';

SELECT
  220 AS 'Grupo total de pessoas',
  220 DIV 12 AS 'Grupos Inteiros',
  IF(220 MOD 18 = 0, 'Sim', 220 MOD 18) AS 'Lugares sobrando';

-- Monte uma query que gere um valor entre 15 e 20 .
SELECT
  ROUND(RAND() * 5 + 15);

-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT
  ROUND(15.7515971, 5);

-- Estamos com uma média de 39.494 de vendas de camisas por mês.
-- Qual é o valor aproximado para baixo dessa média ?
SELECT
  FLOOR(39.494);

-- Temos uma taxa de inscrição de 85.234 % no curso de
-- fotografia para iniciantes.Qual é o valor aproximado para cima dessa média ?
SELECT
  CEIL(85.234);

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT
  DATEDIFF ('2030-01-20', NOW());

-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .
SELECT
  TIMEDIFF('11:00:00', '10:25:45');

-- Para praticar,
-- vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.
-- Monte um query que exiba: A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
-- A duração mínima dos filmes como 'Duração Mínima';
-- A duração máxima dos filmes como 'Duração Máxima';
-- A soma de todas AS durações como 'Tempo de Exibição Total';
-- E finalmente,
-- a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT
  AVG(length) AS 'Média de Duração',
  MIN(length) AS 'Duração Mínima',
  MAX(length) AS 'Duração Máxima',
  SUM(length) AS 'Tempo de Exibição Total',
  COUNT(*) AS 'Filmes Registrados'
FROM
  sakila.film;

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50.
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a
-- query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT
  rating,
  AVG(length) AS average_length
FROM
  sakila.film
GROUP BY
  rating
HAVING
  average_length BETWEEN 115 AND 121.5;

-- Usando a query a seguir,
-- exiba apenas os valores de custo de substituição que estão acima de $ 3950.50.
-- Dê um alias que faça sentido para SUM(replacement_cost),
-- de forma que deixe a query mais legível.Finalize ordenando os resultados de forma crescente.
SELECT
  rating,
  SUM(replacement_cost) AS replacement_sum
FROM
  sakila.film
GROUP BY
  rating
HAVING
  replacement_sum > 3950.50;