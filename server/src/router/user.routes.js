const { Router } = require('express');
const { ctrl } = require('../controllers/user.controller');

// Inicializaciones
const router = Router();

// Rutas
router.post('/create', ctrl.createUser);
router.get('/read', ctrl.readUser);
router.get('/read/:id', ctrl.readUserId);
router.put('/update', ctrl.updateUser);
router.delete('/delete', ctrl.deleteUser);

// Exportar el router
module.exports = router;