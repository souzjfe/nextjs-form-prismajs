# Exemplo de formulário para integração em banco de dados PostgreSQL

Desenvolvido como trablho da disciplina de banco de dados da Universidade Federal do Paraná com o ojetivo de demostrar a conectividade de uma base de dados a um sistema funcional.

## Dependências

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJs](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuração inicial

Basta informar os dados necessários para conexão com PostgreSQL no arquivo `.env` na raiz do projeto. Para isso caso ainda não exista adicione a variável:

```env
DATABASE_URL="postgresql://USERNAME_POSTGRE:SENHA_POSTGRE@localhost:5432/nextjs-form-prismajs?schema=public"
```

Substituindo `USERNAME_POSTGRE` e `SENHA_POSTGRE` respectivamente por usuário e senha já configurado em seu banco PostgreSQL

## Como iniciar o projeto

1. Clone o repositório

```shell
git clone https://github.com/souzjfe/nextjs-form-prismajs.git
```

2. Abra a pasta clonada

```shell
cd nextjs-form-prismajs
```

3. Instalar dependências do client

```shell
npm i
```

4. Inicializar banco de dados

```shell
npx prisma migrate dev
```

5. Iniciar client no navegador

```shell
npm run dev
```

Acesse [localhost:3000](http://localhost:3000/)
