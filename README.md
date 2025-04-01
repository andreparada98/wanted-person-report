# Wanted Person Report

Este é o projeto **Wanted Person Report**, desenvolvido para exibir informações de pessoas desaparecidas com filtros e paginação, utilizando Angular 17. A solução inclui build e deploy via Docker com NGINX.

## Dados do Inscrito

- **Nome:** Seu Nome
- **E-mail:** seu.email@exemplo.com
- **Data da Inscrição:** 01/04/2025

## Descrição do Projeto

O projeto consiste em uma aplicação Angular que exibe dados de pessoas desaparecidas. Foi desenvolvido com Angular 17 e configurado para ser servido por meio de um container Docker com NGINX.

## Dependências

- **Node.js** (versão 20.11.0 ou superior)
- **Angular CLI**
- **Docker** e **Docker Compose**
- **NGINX**

## Estrutura do Projeto

- `src/` – Código-fonte da aplicação Angular.
- `dist/` – Pasta onde a build de produção é gerada.
- `Dockerfile` – Arquivo de build para gerar a imagem Docker da aplicação.
- `docker-compose.yml` – Arquivo para subir a aplicação via Docker Compose.
- `nginx.conf` – Configuração do NGINX para servir a aplicação.
- `README.md` – Este arquivo.

## Como Buildar e Executar com Container

### Pré-requisitos

- Docker e Docker Compose instalados.

### Passos

1. **Build e Subida do Container**

    No terminal, na raiz do projeto, execute:

    ```bash
    sudo docker compose up --build
    ```
