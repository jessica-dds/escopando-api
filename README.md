Desenvolvido durante o curso Full Stack da Cubos Academy.

# Mini Instagram

## O que o usuário pode fazer

- Fazer login
- Fazer cadastro
- Ver os dados do seu perfil
- Editar os dados do seu perfil
- Ver postagens de outras pessoas
    - Ver quatidade de curtidas numa postagem
    - Ver os comentários em uma postagem
- Curtir postagens de outras pessoas
- Comentar em postagens

## O que não será possível fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- Curtir um comentário
- Comentar em outros comentários

## Endpoints

### POST - Login

#### Dados enviados
- username
- senha

#### Dados retornados
- sucesso / erro
- token

#### Objetivos gerais 

- Validar username e a senha
- Buscar o usuário no banco de dados
- Verificar se a senha informada está correta 
- Gerar o token de autenticação
- Retornar os dados do usuário e o token 

---

### POST - Cadastro

#### Dados enviados
- username
- senha

#### Dados retornados
- sucesso / erro

#### Objetivos gerais 
- Validar username e a senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha
- Cadastrar o usuário ni banco de dados
- Retornar sucesso ou erro

---

### GET - Perfil

#### Dados enviados
- token (que terá id ou username)

#### Dados retornados
- URL da foto
- Nome
- Username
- Site
- Bio
- E-mail
- Telefone
- Genero
- Senha

#### Objetivos gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Retornar os dados do usuário

---

### PUT - Perfil

#### Dados enviados
- token (que terá id ou username)
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Genero

#### Dados retornados
- Sucesso ou erro

#### Objetivos gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir, ao menos, um campo para atualizar
- Criptografar a senha - se for informada
- Verificar se o e-mail e o username já existem no bando de dados - se for informado
- Atualizar o registro do usuário no banco de dados
- Retornar sucesso ou erro 

---

### GET - Postagens

#### Dados enviados
- token
- offset

#### Dados retornados
- Postagens []
    - id
    - texto
    - foi curtido por mim
    - Usuario
        - URL da foto
        - username
        - é perfil oficial
    - Fotos []
    - quatidade de curtidas
    - Comentários []
        - username
        - texto
    - Data

#### Objetivos gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Retornar postagens de outras pessoas


---

### POST - Postagens

#### Dados enviados
- token
- texto
- array com fotos

#### Dados retornados
- Sucesso ou erro

#### Objetivos gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuário logado
- Cadastro das fotos da postagem
- Retornar sucesso ou erro

---

### POST - Curtir

#### Dados enviados
- token (contem username ou id do usuario)
- id da postagem

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Buscar o cadastro da postagem com o id informado
- Verificar se o usuário já curtiu a postagem
- Cadastrar curtida da postagem no banco de dados
- Retornar sucesso ou erro 

---

### POST - Comentar

#### Dados enviados
- token (contem username ou id do usuario)
- id da postagem
- texto

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Validar o texto
- Buscar a postagem pelo id informado 
- Cadastrar comentário no banco de dados
- Retornar sucesso ou erro





