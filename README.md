# Rentx API

## **Cadastro de Carro**

**RF:**

1. Deve ser possível cadastrar um novo carro
2. Deve ser possível listar todas as categorias

**RN:**

1. Não deve ser possível cadastrar um carro com uma placa já existente
2. Não deve ser possível alterar a placa de um carro já cadastrado
3. O carro deve ser cadastrado, por padrão, com disponibilidade
4. O usuário responsável pelo cadastro deve ser um usuario administrador

## **Listagem de Carros**

**RF:**

1. Deve ser possível listar todos os carros disponíveis
2. Deve ser possível listar todos os carros disponíveis pelo nome da categoria
3. Deve ser possível listar todos os carros disponíveis pelo nome da marca
4. Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN:**

1. O usuário não precisa estar logado no sistema

## **Cadastro de Especificação no Carro**

**RF:**

1. Deve ser possível cadastrar uma especificação para um carro
2. Deve ser possível listar todas as especificações
3. Deve ser possível listar todos os carros

**RN:**

1. Não deve ser possível cadastrar uma especificação para um carro não cadastrado
2. Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
3. O usuário responsável pelo cadastro deve ser um usuário administrador

## **Cadastro de imagens do carro**

**RF:**

1. Deve ser possível cadastrar a imagem do carro
2. Deve ser possível listar todos os carros

**RNF:**

1. Utilizar o multer para upload de arquivo

**RN:**

1. O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
2. O usuário responsável pelo cadastro deve ser um usuário administrador

## **Aluguel de carro**

**RF:**

1. Deve ser possível cadastrar um aluguel

**RN:**

1. O aluguel deve ter duração minima de 24 horas
2. Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
3. Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
