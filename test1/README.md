# Test 1
- Querying

> Create table User
>> CREATE TABLE `schema`.`User` (
>>   `id` INT NOT NULL,
>>   `UserName` VARCHAR(45) NULL,
>>   `Parent` INT NULL,
>> PRIMARY KEY (`id`));

> Insert Data
>> INSERT INTO User VALUES(1,'Ali', 2);
>> INSERT INTO User VALUES(2,'Budi', 0);
>> INSERT INTO User VALUES(3,'Cecep', 1);

> Query
>> SELECT x.id, x.UserName, y.UserName as ParentUserName
>> FROM User x LEFT JOIN
>>     User y
>>     on x.Parent = y.id

## How to run 
- create database schema, in my case I named it schema
- run 'Create table User'
- run 'Insert Data'
- run 'Query'
