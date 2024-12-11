const express = require ('express');
const router = express.Router();
const empleadoCtrl = require ('../controllers/empleado.controller');

router.get('/', empleadoCtrl.getEmpleado);
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getUniqueEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

router.get('/', async (req, res) => {
    console.log("Inicio de la consulta de empleados");
    try {
      const empleados = await Empleado.find(); // Si usas Mongoose
      console.log("Consulta exitosa:", empleados);
      res.status(200).json(empleados);
    } catch (error) {
      console.error("Error en la consulta:", error);
      res.status(500).json({ error: "Error al obtener empleados" });
    }
  });
  

module.exports = router;