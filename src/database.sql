drop database if exists book;
create database book;
use book;
create table t_book(
    id int primary key auto_increment,
    title varchar(200),
    content varchar(200),
    price int,
    book_type varchar(200)
)engine=Innodb default charset=utf8;
create table t_book_comment(
    id int primary key auto_increment,
    username varchar(200),
    commentDate date,
    star int,
    content varchar(200),
    book_id int,
    foreign key (book_id) references t_book(id)
)engine=Innodb default charset=utf8;

insert into t_book (title,content,price,book_type) 
values 
('Angular从入门到放弃','这是一本好书',12,'计算机'),
('MySql从入门到住院','这也是一本好书',20,'计算机'),
('Node从安装到卸载','不可不读',1285,'计算机'),
('我是谁','谁管你是谁',1,'哲学'),
('我在哪','谁管你在哪',2,'哲学'),
('我在干嘛','在买加特林(会冒蓝火，哒哒哒哒哒哒)',10000,'哲学'),
('黑底白字红色标题','亚洲,欧美,日韩,你懂得',999999,'你懂得'),
('南京比较热','亚洲,欧美,日韩,你懂得',999999,'你懂得');
