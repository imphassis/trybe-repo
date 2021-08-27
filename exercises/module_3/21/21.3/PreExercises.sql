-- 1 Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve
-- exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE showMostFamousActors()
BEGIN

SELECT
    f.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS name,
    COUNT(*) AS total
FROM
    sakila.film_actor AS f
    INNER JOIN sakila.actor AS a ON a.actor_id = f.actor_id
GROUP BY
    actor_id
ORDER BY
    total DESC
LIMIT
    10;
END $$

DELIMITER ;


CALL showMostFamousActors();


--  2 Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma
--  string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria
--   selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;

DELIMITER $$

CREATE PROCEDURE filterMoviesByCategory(IN category_name VARCHAR(45))
BEGIN

SELECT 
    fc.film_id,
    f.title,
    fc.category_id,
    c.name
FROM
    sakila.film_category AS fc
    INNER JOIN sakila.film AS f ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c ON c.category_id = fc.category_id
    WHERE c.name = category_name;
    
END $$

DELIMITER ;

CALL filterMoviesByCategory('Drama');



-- 3 Monte uma procedure que receba o email de um cliente como parâmetro de entrada e 
-- diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;
DELIMITER $$

CREATE PROCEDURE checkClientStatus(
IN client_email VARCHAR(300), 
OUT result VARCHAR(10)
)
BEGIN
SET result = (
SELECT IF(active = 1, 'TRUE', 'FALSE')
FROM sakila.customer AS c WHERE c.email = client_email);

END $$

DELIMITER ;


CALL checkClientStatus('SANDRA.MARTIN@sakilacustomer.org', @result);
SELECT @result;	


-- 1 Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total 
-- de pagamentos feitos até o momento por um determinado customer_id .

USE sakila;
DELIMITER $$

CREATE FUNCTION totalPaymentPerCustomer(customer INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_amount INT;
     SELECT SUM(amount) FROM sakila.payment
     WHERE customer_id = customer
     INTO total_amount;
    RETURN total_amount;
END $$

DELIMITER ;

-- Como usar:

SELECT totalPaymentPerCustomer(14);


-- 2 Crie uma function que, dado o parâmetro de entrada inventory_id , 
-- retorna o nome do filme vinculado ao registro de inventário com esse id.

USE sakila;
DELIMITER $$

CREATE FUNCTION getMovieFromInventory(inventory INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
 DECLARE inventory_movie VARCHAR(300);


SELECT f.title
FROM sakila.inventory AS i
INNER JOIN sakila.film AS f ON f.film_id = i.film_id
WHERE i.inventory_id = inventory
GROUP BY f.film_id
INTO inventory_movie;
    RETURN inventory_movie;
END $$

DELIMITER ;

SELECT getMovieFromInventory(5);





-- 3 Crie uma function que receba uma determinada categoria de filme em formato de texto 
-- (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$
CREATE FUNCTION getTotalMoviesByCategory(category VARCHAR(45))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_movies INT;
 SELECT 
    COUNT(*) AS total
    FROM sakila.film_category as fc
    INNER JOIN sakila.category as c ON c.category_id = fc.category_id
    WHERE c.name = category
    INTO total_movies;
		RETURN total_movies;
END $$  
DELIMITER ;

SELECT getTotalMoviesByCategory('Action');
    
    
-- TRIGGERS
-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido,
--  a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER insert_car_trigger
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'INSERÇÃO',
    NEW.disponivel_em_estoque = 1;
 
END $$
DELIMITER ;

INSERT INTO betrybe_automoveis.carros(preco) VALUE(300);
SELECT * from carros;

-- 2 Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o
-- valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
USE betrybe_automoveis
DELIMITER $$
CREATE TRIGGER update_car_trigger
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE carros
SET preco = 350
WHERE id_carro = 1;

SELECT * FROM carros;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes
--  as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER delete_car_trigger
BEFORE DELETE ON carros
FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM carros
WHERE id_carro = 1;

SELECT * FROM log_operacoes;
