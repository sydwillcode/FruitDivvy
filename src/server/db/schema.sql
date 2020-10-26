CREATE TABLE providers(
id int not null auto_increment,
name  VARCHAR(60) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
address VARCHAR(60) NOT NULL,
lat float(60) NOT NULL,
lng float(60) NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);

create table users_fruits (
userid int not null auto_increment, 
fruit varchar(25) not null, 
primary key(userid, fruit), 
foreign key(userid) references providers(id)
);                                                                                                          


INSERT INTO providers (name, email, password, address, lat, lng) VALUES
('Janet Snakehole', 'april@pawnee.gov', 'password123', '1701 11th Ave South, Birmingham, AL', '33.4985465', '-86.8024072' ),
('Burt Macklin', 'andy@pawnee.gov', 'password123', '1500 1st Ave N, Birmingham, AL', '33.5119225', '-86.8147297');

INSERT INTO users_fruits (userid, fruit) VALUES
(1, 'durian'),
(1, 'lychee'),
(1, 'dragon fruit'),
(1, 'tomato'),
(2, 'skittles'),
(2, 'beer'),
(2, 'marshmallow'),
(2, 'druian'),
(2, 'tomato');