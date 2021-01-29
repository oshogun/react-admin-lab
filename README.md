# React Admin Lab


## About (English)

This project was made as a simple coding challenge to demonstrate the 
basic functionalities of the [react-admin](https://marmelab.com/react-admin/) framework, in the context of 
a task management user interface. It consumes data from the 
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API
for demonstration purposes.

## Features

This project includes a Workers tab, which consists of a list of workers
in the company, as well as the Tasks tab which includes the list of tasks,
the worker each task was attributed to, and whether or not the task is completed.
All tasks can be visualized and edited, but because the API being used is
read-only, changes aren't actually saved. 

Both the Workers and Users lists contain search tools and filters. The data
in those tables can also be exported in CSV format. The UI is optimized to work
both on large widescreen displays (such as computers and tablets), as well
as small portrait displays (such as smartphones), automatically adjusting the
layout depending on the display size.

The interface is fully translated to Portuguese, in order to demonstrate the
I18n support of the framework. Due to time constraints in this challenge, 
no English implementation has been made.

## Sobre (Português)

Este projeto foi feito como um desafio de programação simples visando demonstrar
as funcionalidades básicas do framework [react-admin](https://marmelab.com/react-admin/), no contexto de uma interface
de gerenciamento de tarefas. Ele consome dados da API REST 
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) para fins de demonstração.

## Recursos

Este projeto inclui uma aba de Funcionários, que consiste em uma lista de
funcionários de uma empresa, bem como uma aba Tarefas que inclui a lista
das tarefas, o funcionário a quem cada tarefa foi atribuída, e se a tarefa
foi concluída ou não. Todas as tarefas e usuários podem ser visualizados e 
editados, porém como a API usada é somente-leitura, as mudanças não são
salvas.

Ambas as interfaces de Funcionários e Tarefas possuem ferramentas de pesquisa
e filtros. Os dados dessas tabelas podem ser exportados em formato CSV. A
interface é otimizada para funcionar tanto em telas grandes (como computadores
e tablets) como em telas pequenas em formato de retrato (como celulares), 
ajustando automaticamente o layout dependendo do tamanho da tela.

A interface é completamente traduzida para o português visando demonstrar o
suporte a i18n do framework. Devido a limitações de tempo na implementação
do desafio, não foi implementada a lingua inglesa.