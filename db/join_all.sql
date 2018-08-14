select r.id, r.resort, c.pass, c.price, c.quantity, o.total
from orders o join cart c on o.id = c.ordersid
join resorts r on r.id = c.resortsid
where c.ordersid = $1