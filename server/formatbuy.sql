Create table compras(
    id serial not null,
    peli varchar (50),
    boletos varchar (2),
    email varchar(20),
    valorboleto varchar (4),
    totalBoletos varchar(5)
)
Create table pelis(
    id serial not null,
    imagen  text,
    titulo varchar (250) not null,
    resumen varchar (250) not null,
    categoria varchar (250) not null,
    valorboleto varchar (250) not null,
    estado boolean
);
  