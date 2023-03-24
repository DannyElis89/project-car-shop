# Bem vindos ao projeto Car Shop!
<summary><strong>👨‍💻 O que foi desenvolvido</strong> </summary><br>

Este projeto é uma aplicação web de venda de carros, desenvolvido durante o módulo de back-end do curso de Desenvolvimento Web da Trybe. Ele permite aos usuários navegar por diferentes modelos de carros, visualizar informações detalhadas e agendar um test drive.

Para a construção da aplicação, foram utilizadas tecnologias como `TypeScript`, `Node.js` e `Express`. O projeto foi iniciado com um template fornecido pela Trybe, o qual oferece uma estrutura de diretórios e arquivos para o front-end da aplicação. Além disso, foram aplicados os princípios de Programação Orientada a Objetos (`POO`) na construção de uma API com `CRUD` para gerenciar uma concessionária de veículos, utilizando o banco de dados `MongoDB`.

Para a interação com o banco de dados, foi utilizada a biblioteca `Mongoose`, e para a realização de testes automatizados, foi utilizada a biblioteca `Jest`.

O objetivo do projeto é fornecer uma experiência atraente e eficiente aos usuários, garantindo a segurança e qualidade do sistema.

<details>
<summary><strong> Rodando o projeto  </strong> </summary><br>
1. Instale as dependências rodando <i>npm install</i> na raiz do projeto;
</details>


<!-- <details> -->
<summary><strong> Requisitos  </strong> </summary><br>

**1 - Criação da interface `IModel` genérica**

> - Desenvolvido em `/src/interfaces/IModel.ts`.

Esta interface é usada para a conexão com o banco de dados e possui as funções `create()`, `read()`, `readOne()`, `update()` e `delete()`.

Por ser genérica, a interface recebe um tipo `T` qualquer, e espera, em cada função, as seguintes especificações:
 - `create()`: recebe um objeto do tipo `T`e retorna uma Promise do tipo `T`.
 - `read()`: deve retorna uma Promise contendo um array de objetos do tipo `T`.
 - `readOne()`: recebe uma string e retorna uma Promise do tipo `T` ou nula.
 - `update()`: recebe uma string e um objeto do tipo `T` e retorna uma Promise do tipo `T` ou nula.
 - `delete()`: recebe uma string e retorna uma Promise do tipo `T` ou nula.


**2 - Criação da interface `IVehicle` genérica**

> Desenvolvido em `/src/interfaces/IVehicle.ts`.

Interface utilizada para criação dos tipos de carro, moto e caminhão.
Ela contém todos os atributos comuns de todos os veículos que listados aqui. São eles:

 | Atributo | Descrição |
 | :-------: | :-------- |
 | `model`   | Marca e/ou modelo do veículo. É uma string com, pelo menos, 3 caracteres. |
 | `year`    | Ano de fabricação do veículo. É um valor inteiro positivo maior ou igual a 1900, porém menor ou igual a 2022. |
 | `color`   | Cor principal do veículo. É uma string com, pelo menos, 3 caracteres. |
 | `status`  | Status que define se um veículo pode ou não ser comprado. Recebe valores booleanos e é opcional. |
 | `buyValue` | Valor de compra do veículo. Recebe apenas números inteiros. |


**3 - Criação da interface `ICar` a partir da interface `IVehicle`**

> Desenvolvido em `/src/interfaces/ICar.ts`.

A interface possio todos os atributos da interface `IVehicle` e, também, os atributos:

 | Atributo  | Descrição |
 | :--------: | :-------- |
 | `doorsQty` | Quantidade de portas de um carro. É um valor inteiro positivo maior ou igual a 2 e menor ou igual a 4 |
 | `seatsQty` | Quantidade de assentos disponíveis no carro. É maior ou igual a 2 e menor ou igual a 7 |


**4 - Criação de uma rota para o endpoint `/cars` onde é possível cadastrar um novo carro**

Criação de uma rota que receba uma requisição `POST` para cadastrar um veículo do tipo carro.

- A rota retorna erro `400` caso:
  - A requisição receba um objeto vazio;
  - Tentar criar um carro com quantidade de assentos inferior a 2;
  - Tentar criar um carro com quantidade de portas inferior a 2;
  - Tentar criar um carro sem `model`, `year`, `color` e `buyValue`;
  - Tentar criar um carro sem `doorsQty` e `seatsQty`;

- Não é possível criar um carro se os atributos `model`, `year`, `color`, `buyValue`, `doorsQty` e `seatsQty` caso estejam com tipos errados;
- Sua API responde com status http `201` e o seguinte body:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  ```

**5 - Desenvolvimento de testes para cobrir 15% das camadas Model, Service e Control**

> Desenvolvidos em `src/tests/unit/model`. `src/tests/unit/services` e `src/tests/unit/controllers`

**6 - Criação de uma rota para o endpoint `/cars` onde é possível listar todos os carros registrados**

Criação de uma rota que recebe uma requisição `GET` para receber todos os veículos do tipo `carro` registrados no banco de dados.

**7 - Criação de uma rota para o endpoint `/cars/id` onde é possível listar um único carro através do seu id**

Criação de uma rota que recebe uma requisição `GET` para receber determinado veículo do tipo `carro` que possui o `id` passado como parâmetro na rota.

**8 - Desenvolvimento de testes para cobrir 30% das camadas Model, Service e Control**

> Desenvolvidos em `src/tests/unit/model`. `src/tests/unit/services` e `src/tests/unit/controllers`

**9 - Criação de uma rota para o endpoint `/cars/id`, onde é possível atualizar o registro de um carro através do seu id**

Criação de uma rota que recebe uma requisição `PUT` para atualizar determinado veículo do tipo carro que possui o `id` passado como parâmetro na rota.

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `400` caso o `body` esteja vazio;
  - Um carro é atualizado com sucesso;
  - A API responde com status http `200` e o seguinte body, em caso de sucesso:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  ```


**10 - Criação de uma rota para o endpoint `/cars/id` para excluir os registros de um carro**

Criação de uma rota que recebe uma requisição `DELETE` para excluir determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota.

</details>

