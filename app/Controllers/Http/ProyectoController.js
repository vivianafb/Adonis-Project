'use strict'

class ProyectoController {
    async find({request,response,auth}){
        
        const user = await auth.getUser();

        const proyectos = await user.proyectos().fetch();
        response.json(proyectos)
    }
}

module.exports = ProyectoController
