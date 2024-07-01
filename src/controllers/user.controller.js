const dataBase = require('../dataBase/dataBase.js');
const ctrl = {};

// <------ CRUD ------>
// Obtener todos los usuarios
ctrl.readUser = (req, res) => {
    res.json(dataBase);
}

// Crear un usuario
ctrl.createUser = (req, res) => {
    const { name, age } = req.body;
    const id = dataBase.length + 1;
    dataBase.push({ id, name, age });
    res.send('Usuario creado correctamente!');
}

// Obtener un usuario por id
ctrl.readUserId = (req, res) => {
    const id = req.params.id;
    const user = dataBase.find(user => user.id == id);
    res.json(user);
}

// Actualizar un usuario
ctrl.updateUser = (req, res) => {
    const { name, age } = req.body;
    const id = req.params.id;
    dataBase.forEach(user => {
        if (user.id == id) {
            user.name = name;
            user.age = age;
        }
    });
    res.send('Usuario modificado correctamente!');
}

// Eliminar un usuario
ctrl.deleteUser = (req, res) => {
    const id = req.params.id;
    dataBase.forEach((user, index) => {
        if (user.id == id) {
            dataBase.splice(index, 1);
        }
    });
    res.send('Usuario eliminado correctamente!');
}

// Exportar el controlador
module.exports = { ctrl };