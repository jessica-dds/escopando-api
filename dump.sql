create table usuarios (
    id serial primary key,
    nome text,
    imagem text,
    username text not null unique,
    email text unique,
    site text,
    bio text,
    telefone text, 
    genero text,
    senha text not null,
    vericado boolean default false
);
