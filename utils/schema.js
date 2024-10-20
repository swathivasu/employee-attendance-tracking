import { mysqlTable } from "drizzle-orm/mysql-core";
import { int, varchar } from "drizzle-orm/mysql-core"; 

export const names = mysqlTable('users', {
    id: int('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    work: varchar('work', {length:100}).notNull(),
    designation: varchar('designation', { length: 100 }).notNull(),
    email: varchar('email', { length: 100 }).notNull(),
    ontact:varchar('contact' , {length: 100}).notNull()

});


export const Employee = mysqlTable('users', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    work: varchar('work', {length:100}).notNull(),
    designation: varchar('designation', { length: 100 }).notNull(),
    email: varchar('email', { length: 100 }).notNull() ,
    contact:varchar('contact' , {length: 100}).notNull()
});







