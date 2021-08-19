DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders; USE PiecesProviders;

CREATE TABLE Pieces ( Code INTEGER PRIMARY KEY NOT NULL, Name TEXT NOT NULL );

CREATE TABLE Providers ( Code VARCHAR(40) PRIMARY KEY NOT NULL, Name TEXT NOT NULL );

CREATE TABLE Provides ( Piece INTEGER, FOREIGN KEY (Piece) REFERENCES Pieces (Code), Provider VARCHAR(40), FOREIGN KEY (Provider) REFERENCES Providers (Code), Price INTEGER NOT NULL, PRIMARY KEY (Piece , Provider) );

INSERT INTO Providers(Code, Name) VALUES ('HAL', 'Clarke Enterprises'), ('RBT', 'Susan Calvin Corp.'), ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name) VALUES (1, 'Sprocket'), (2, 'Screw'), (3, 'Nut'), (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price) VALUES (1, 'HAL', 10), (1, 'RBT', 15), (2, 'HAL', 20), (2, 'RBT', 25), (2, 'TNBC', 14), (3, 'RBT', 50), (3, 'TNBC', 45), (4, 'HAL', 5), (4, 'RBT', 7);
-- 1 Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
SELECT  Pieces.Name
       ,Provides.Price
FROM Pieces, Provides
WHERE Provides.Provider = 'RBT';
-- 2 Escreve uma query para exibir todas AS informações das cinco peças com os maiores preços.
SELECT  Provides.Price    AS 'Preço'
       ,Provides.Provider AS 'SIGLA EMPRESA'
       ,Pieces.Name       AS 'Peça'
       ,Providers.Name    AS 'Nome da Empresa'
FROM Provides
INNER JOIN Pieces
ON Provides.Piece = Pieces.Code
INNER JOIN Providers
ON Provides.Provider = Providers.Code
ORDER BY Provides.Price DESC
LIMIT 5;
-- 3 Escreva uma query para exibir o nome das empresas e preço das
-- peças com os quatro maiores preços começando a lista a partir do 3º item.
SELECT  Provides.Price AS 'Preço'
       ,Providers.Name AS 'Nome da Empresa'
FROM Provides
INNER JOIN Providers
ON Provides.Provider = Providers.Code
ORDER BY Provides.Price DESC
LIMIT 5 OFFSET 3;
-- 4 Escreva uma query para exibir todas AS informações das peças que
-- são providas pela empresa HAL . Ordene o resultado pelos preços das
-- peças de forma decrescente.
SELECT  Provides.Price AS 'Preço'
       ,Pieces.Name    AS 'Peças'
FROM Provides
INNER JOIN Pieces
ON Provides.Piece = Pieces.Code
WHERE Provides.Provider = 'HAL'
ORDER BY Provides.Price DESC;
-- 5 Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT  Provides.Provider AS 'SIGLA'
       ,Provides.Price    AS 'PREÇO'
       ,Providers.Name    AS 'EMPRESA'
FROM Provides
INNER JOIN Providers
ON Provides.Provider = Providers.Code
WHERE Provides.Piece = 1;