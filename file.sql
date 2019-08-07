CREATE DATABASE bamazon;
use bamazon;
create table products(
item_ID varchar(100),
product_name varchar(100),
department_name varchar(100),
price varchar(100),
stock_quanity varchar(100)
);
use bamazon;
insert into products (
item_ID,
product_name,
department_name,
price,
stock_quanity)
value ("001", "Satanic Bible", "Books", "6.66", "666");
select * from products