select * from orders
where userid = $1 and active = true;