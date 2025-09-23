import db from "../config/db.js";

const mTask = {
    getAll: async () => {
        try {
            const [results] = await db.query("SELECT * FRoM tasks");
            return results;
        } catch (err) {
            throw {status: 500, message: "Error al cargar las tareas"}
        }
    },
    getOne: async () => {},
    create: async (task) => {
        try {
            await db.query("INSERT INTO tasks (title) VALUES (?)",[task.title]);
        } catch (err) {
            throw {status: 500, message: "Error al crear la tarea"}
        }
    },
    update: async () => {},
    complete: async () => {},
    uncomplete: async () => {},
    delete: async () => {},
    
}

export default mTask;