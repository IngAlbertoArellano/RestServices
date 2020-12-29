CREATE DATABASE IF NOT exists michaelPage;

USE michaelPage;

CREATE TABLE restServicesController (
	id int(11) NOT NULL auto_increment,
    valueA int(11),
    valueB int(11),
    product int(11),
    power int(11),
    result int(11),
    
    primary KEY(id)
);

describe restServicesController;

select * from restServicesController
