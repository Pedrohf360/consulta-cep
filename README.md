<br />
<p align="center">
    <img src="https://raw.githubusercontent.com/guibranco/viacep/master/logo.png" alt="Logo" width="280" height="60">

  <h2 align="center">Desafio Node.js - Via CEP</h2>
</p>

## Acesso Rápido

* [Sobre](#sobre)
* [Requisitos](#requisitos)
* [Iniciando](#iniciando)
* [Estrutura](#estrutura)
## Sobre

O objetivo principal desta Web API é fornecer uma rota para consulta de endereços, por meio de um CEP que deve ser informado, conforme especificado a seguir.

## Requisitos

Nesta seção, serão listadas as tecnologias utilizadas e suas respectivas versões.

* [Node.js 14](https://nodejs.org/en/)
* [npm 6](https://www.npmjs.com/)
* [TypeScript 4](https://www.typescriptlang.org/)

## Iniciando

1) Execute ``git clone https://github.com/Pedrohf360/consulta-cep``;
2) Renomeie o arquivo '.env.example' para '.env';
3) Execute ``npm install`` na raíz do projeto (onde se encontra o arquivo package.json);
4) Execute ``npm run start:dev``;
5) Pronto! A API está em funcionamento :D

- Observações:

    - Documentação Swagger: http://localhost:3000/api-docs
    - Para executar as rotinas de teste, utilize ``npm test``
## Estrutura

```
.
└── src/
    ├── api/
    │   ├── components/
    │   │   └── address/
    │   │       ├── controller/
    │   │       │   └── address.controller.ts
    │   │       ├── interfaces/
    │   │       │   └── address.interface.ts
    │   │       └── routes/
    │   │           └── address.routes.ts
    │   ├── routes.ts
    │   └── server.ts
    ├── config/
    │   └── globals.ts
    ├── services/
    │   └── via-cep.ts
    ├── shared/
    │   └── utils.ts
    ├── tests/
    │   └── integration/
    │       └── address.int.test.js
    ├── index.ts
    └── swagger.json
```
