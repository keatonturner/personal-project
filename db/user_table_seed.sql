create table users(
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    auth_id text,
    picture text
)
create table cart(
    resortsid integer references resorts(id),
     quantity integer, 
     pass varchar(6), 
     ordersid integer references orders(id)
     )

     insert into orders(active, total, userid) values(true, 2, 3)