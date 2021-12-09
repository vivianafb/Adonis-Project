'use strict'
const Proyecto = require("../../Models/Proyecto")
class ProyectoController {
    async find({request,response,auth}){
        const user = await auth.getUser();
        const proyectos = await user.proyectos().fetch();
        response.json(proyectos)
    }

    async create({request,response,auth}){
        const user = await auth.getUser();
        const {nombre} = request.all();
        const newProyect = new Proyecto();
        newProyect.fill({
            nombre,
        })
        await user.proyectos().save(newProyect);
        response.json(newProyect)
    }
}

module.exports = ProyectoController
