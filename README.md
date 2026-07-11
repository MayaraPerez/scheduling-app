
# Sistema de Agendamento 🗓️

Sistema de agendamento fullstack desenvolvido com:

- React
- Go (Golang)
- MySQL

## 📚 Objetivo

A aplicação permite realizar o gerenciamento completo de agendamentos de um salão de beleza por meio de uma API desenvolvida em Go e uma interface em React.

Atualmente é possível:

✅ - Criar um novo agendamento.
✅ - Envio de e-email usando Resend
✅ - Consultar um agendamento pelo ID.
✅ - Atualizar o status de um agendamento (Pendente, Confirmado ou Cancelado).
✅ - Cancelar um agendamento pelo ID.
✅ - Exibir os detalhes do agendamento na interface.

---

## 🚀 Funcionalidades

### Backend
O back-end foi desenvolvido em Go seguindo uma arquitetura em camadas.

```
      Handler
        ↓
      Service
        ↓
    Repository
        ↓
      MySQL
```
Foram implementados:

- Endpoints REST.
- Validação dos métodos HTTP.
- Validação de parâmetros recebidos.
- Comunicação com banco MySQL.
- Operações CRUD.
- Tratamento de erros.
- Respostas HTTP adequadas para cada situação.
- Integração com serviços externos.

Estrutura atual:

### Frontend
- Página inicial com banner de navegação.
- Sistema de rotas utilizando React Router.
- Formulário para criação de agendamentos.
- Formulário para atualização de status.
- Formulário para cancelamento.
- Formulário para consulta de agendamento.
- Feedback visual utilizando React Toastify.
- Componentização da interface.
- Organização das páginas utilizando React Router.

---

### Banco de Dados

| Campo       | Descrição                    |
| ----------- | ---------------------------- |
| id          | Identificador do agendamento |
| client_name | Nome do cliente              |
| email       | Email do cliente             |
| phone       | Telefone do cliente          |
| service     | Serviço solicitado           |
| date        | Data do atendimento          |
| time        | Horário                      |
| status      | Status do agendamento        |


---

## 🛠️ Tecnologias

### Frontend
- React
- Vite
- React Router DOM
- React Toastify
- React DatePicker

### Backend
- Go
- net/http
- Driver MySQL
- agendamento utilizando Resend

## ⚠️ Variáveis ​​de Ambiente

Este projeto utiliza arquivos `.env` para informações sensíveis, como senhas do banco de dados.

O arquivo `.env` é ignorado pelo Git por motivos de segurança.

---

## 🎬 Demo

👉 [Assista à demo do projeto](https://drive.google.com/file/d/14ouvkI3VU8dYq7ECLSF_Gk3da4yXRrDV/view?usp=drive_link)

--

## ▶️ Executando o projeto

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
go run cmd/main.go
```
