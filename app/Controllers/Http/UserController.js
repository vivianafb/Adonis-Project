'use strict'
const User = use("App/Models/User")
class UserController {
    async store({request,response}){
        const {username,email,password} = request.all();
        if(!username || !email || !password)
            return response.status(400).json({msg:"Invalid body params"});
        

        const user = await User.create({
            username,
            password,
            email,
        });
        response.status(201).json({msg: "Usuario almacenado", user})
    }

    async login({request,response,auth}){
        const {email,password} = request.all();
        const token = await auth.attempt(email,password);
        response.status(200).json({msg: "Login correcto", token})
    }
}

module.exports = UserController
