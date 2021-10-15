const express = require('express');
const router = express.Router();
const datos = require('../models/task');

router.get('/tasks',async(req, res)=> {
    //res.send("Esta es una ruta de las tareas")
    const data = await datos.find();
    console.log(data);
    res.json(data);
});

router.get('/tasks/:id', async(req, res)=>{
    const data = await datos.findById(req.params.id);
    res.json(data);
    console.log(data)
});

router.post('/tasks',async(req, res)=> {    
    const datos_body = new datos(req.body);
    await datos_body.save();
    console.log(datos_body)
    res.json({
        status: "Datos guardados"
    });
});

router.put('/tasks/:id',async(req, res)=> {    
    await datos.findByIdAndUpdate(req.params.id, req.body);
    //console.log(req.params.id);
    res.json({
        status: "Datos actualizados"
    })

});

router.delete('/tasks/:id', async(req, res)=>{
    await datos.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Datos eliminados'
    })
});

module.exports = router;