-- 1 Escreva uma query para exibir todas AS informações de todos
-- os cientistas que possuam a letra e em seu nome.
SELECT  Scientists.Name AS 'Name'
       ,Scientists.SSN  AS 'SSN'
FROM Scientists.Scientists
WHERE name like '%e%';
-- 2 Escreva uma query para exibir o nome de todos os projetos cujo o
-- código inicie com a letra A . Ordene o resultado em ordem alfabética.
SELECT  Projects.Name  AS 'Nome do Projeto'
       ,Projects.Hours AS 'Horas'
       ,Projects.Code  AS 'Código'
FROM Scientists.Projects
WHERE Projects.Name like 'A%'
ORDER BY Name ASC;
-- 3 Escreva uma query para exibir o código e nome de todos os projetos que
-- possuam em seu código o número 3 . Ordene o resultado em ordem alfabética.
SELECT  Projects.Name
       ,Projects.Code
FROM Scientists.Projects
WHERE Projects.Code like '%3%'
ORDER BY Projects.Code asc;
-- 4 Escreva uma query para exibir todos os cientistas （valores numéricos）
-- cujos projetos sejam AeH3 Ast3 ou Che1 .
SELECT  AssignedTo.Scientist
FROM AssignedTo
WHERE Project in('AeH3', 'Ast3') OR Project in( 'Che1');
-- 5 Escreva uma query para exibir todas AS informações de todos os
-- projetos com mais de 500 horas.
SELECT  *
FROM Scientists.Projects
WHERE Hours >500;
-- 6 Escreva uma query para exibir todas AS informações de todos os
-- projetos cujas horas sejam maiores que 250 e menores 800.
SELECT  *
FROM Scientists.Projects
WHERE Hours >250
AND Hours <800;
-- 7 Escreva uma query para exibir o nome e o código de todos os projetos
-- cujo nome NÃO inicie com a letra A .
SELECT  Projects.Code
       ,Projects.Name
FROM Scientists.Projects
WHERE Name not like 'A%';
-- 8 Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H .
SELECT  Projects.Name
       ,Projects.Code
FROM Scientists.Projects
WHERE Code like '%H%';