# CRUD (Create, Read, Update, Delete) #

CRUD is the most common operations done on data from an application. Whether you're working with a file on disc, or a database somewhere in the cloud, some of the most important day-to-day work you'll do will be create, read, update, and delete.

Below is a table of how CRUD maps to a variety of scenarios:

| CRUD   | HTTP REST Verbs | SQL    | Sequelize       | Mongo                 | Mongoose         |
| ------ | --------------- | ------ | --------------- | --------------------- | ---------------- |
| Create | POST            | INSERT | create          | insertOne/insertMany  | save             |
| Read   | GET             | SELECT | findOne/findAll | find                  | find             |
| Update | PUT             | UPDATE | update          | updateOne/updateMany  | findOneAndUpdate |
| Delete | DELETE          | DELETE | destroy         | deleteOne/deleteMany  | findOneAndRemove |