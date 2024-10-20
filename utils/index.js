import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Employee",
    port: "3306",
    password: "Yashwanth@03"
});

export const db = drizzle(connection);




