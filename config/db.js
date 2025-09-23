import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "todo_list",
    wairForConnections: true, //Activar funcion asicrona del POOL
    connectionLimit: 10, //numero max de creaciones de conexiones a la BD
    queueLimit: 0, //limite de conexiones que puedes aceptar 0 no hay limite
});

export default pool;