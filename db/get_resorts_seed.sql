create table resorts(
    id serial primary key,
    resort varchar(40),
    address varchar(100),
    city varchar(40),
    dayPass integer,
    seasonPass integer
)