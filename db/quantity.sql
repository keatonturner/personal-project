update cart set quantity = $1 where resortsid = $2 and ordersid = $3;
select * from cart;