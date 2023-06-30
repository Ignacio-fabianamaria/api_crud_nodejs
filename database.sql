DROP DATABASE IF EXISTS customerManagement;

CREATE DATABASE customerManagement;

USE customerManagement;

CREATE TABLE salesperson (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    date_of_birth DATE,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE customer (
    id INT NOT NULL AUTO_INCREMENT,
    salesperson_id INT NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    date_of_birth DATE,
    email VARCHAR(60) NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(45),
    state VARCHAR(45),
    PRIMARY KEY(id),
    CONSTRAINT fk_customer_salesperson_id FOREIGN KEY (salesperson_id)
    REFERENCES salesperson(id)
);
