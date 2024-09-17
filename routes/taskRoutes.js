const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req, res)=> { //igual que function (req, res) {} 
    const tasks = taskController.getAllTask();
    res.status(200).json(tasks); //tranforma el objeto tasks en JSON y lo devuelve al cliente
});

// Obtener una tarea específica por ID
router.get('/:id', (req, res) => {
    const task = taskController.getTaskById(req.params.id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});


router.post('/', (req, res)=>{
    const {title, description} = req.body;
    /*const title = req.body.title;
    const description = req.body.description;*/
    const newTask = taskController.createTask(title, description)
    res.status(200).json(newTask);
})

// Actualizar una tarea
router.put('/:id', (req, res) => {
    const { title, description } = req.body;
    const updatedTask = taskController.updateTask(req.params.id, title, description);
    if (updatedTask) {
        res.status(200).json(updatedTask);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
    const deletedTask = taskController.deleteTask(req.params.id);
    if (deletedTask) {
        res.status(200).json(deletedTask);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

module.exports = router;

