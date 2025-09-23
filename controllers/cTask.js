import mTask from "../models/mTask.js"
import error from "../middlewares/error.js"

const cTask = {
  getAll : async (req, res) => {
    try {
      let tasks = await mTask.getAll();
        console.log(tasks);
      res.render("index", { title: "Lista de Tareas", tasks });
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  getAddForm : (req, res) => {
    res.render("task-add", { title: "Agregar Tarea" });
  },
  create : async(req, res) => {
    try {
      let { title } = req.body;
      
      await mTask.create({title});
      res.redirect("/");
      
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  getEditForm : (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find((task) => task.id === id);
    //console.log(task);
  
    if (!task) {
      res.redirect("/");
    } else {
      res.render("edit", { title: "Editar Tarea", task });
    }
  },
  update : (req, res) => {
    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex((task) => task.id === id);
    //console.log(taskIndex);
  
    if (taskIndex === -1) {
      res.redirect("/");
    } else {
      tasks[taskIndex].title = req.body.title;
      res.redirect("/");
    }
  },
  complete : (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find((task) => task.id === id);
  
    if (task) {
      task.completed = true;
    }
  
    res.redirect("/");
  },  
  uncomplete : (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find((task) => task.id === id);
  
    if (task) {
      task.completed = false;
    }
  
    res.redirect("/");
  },  
  delete : (req, res) => {
    let id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.redirect("/");
  },
}

export default cTask;
