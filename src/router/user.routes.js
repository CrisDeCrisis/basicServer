const { Router } = require('express');
const { ctrl } = require('../controllers/user.controller');

// Inicializaciones
const router = Router();

// Rutas
router.post('/', ctrl.createUser);
router.get('/', ctrl.readUser);
router.get('/:id', ctrl.readUserId);
router.put('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUser);

// Exportar el router
module.exports = router;