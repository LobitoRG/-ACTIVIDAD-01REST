let tasks = [
   {id: 1, 
    title:"Tarea1", 
    description: "Descripcion de la Tarea 1"},
   {id: 2, 
    title:"Tarea1", 
    description: "Descripcion de la Tarea 2"},
    {id: 3, 
    title:"Tarea1", 
    description: "Descripcion de la Tarea 3"}
];

function getAllTask(){
    return tasks;
}

function createTask(title, description){
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    const newTask = {
        //id:tasks.length +1,
        id:newId,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;

}
function updateTask(id, title, description) {
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
        task.title = title;
        task.description = description;
    }
    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        return deletedTask[0];
    }
    return null;
}
function getTaskById(id) {
    return tasks.find(task => task.id === parseInt(id));
}


module.exports ={
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    getTaskById
}

