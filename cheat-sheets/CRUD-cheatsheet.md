# CRUD (Create, Read, Update, Delete) #

CRUD is the most common operations done on data from an application. Whether you're working with a file on disc, or a database somewhere in the cloud, some of the most important day-to-day work you'll do will be create, read, update, and delete.

Below is a table of how CRUD maps to a variety of scenarios:

| CRUD   | HTTP REST Verbs | SQL    | Sequelize      |
| ------ | --------------- | ------ | -------------- |
| Create | POST            | INSERT | create         |
| Read   | GET             | SELECT | find (one/all) |
| Update | PUT             | UPDATE | update         |
| Delete | DELETE          | DELETE | destroy        |