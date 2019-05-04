CREATE DATABASE burgers_db;

USE burgers_db;

CREATE table burgers (id int not null auto_increment PRIMARY KEY,
                      burger_name varchar(60) not null,
                      devoured boolean)
    