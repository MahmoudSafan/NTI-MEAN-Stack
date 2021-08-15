const Role = require('../modules/roles')

const addRole = (req , res)=>{
    try{
        const role = new Role(req.body);
        role.save()
        
        res.status(200).send({
            apiStatus:true,
            message:'Role Add Successfuly',
            data:role
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:'Role Faild To Added',
            data:e
        })
    }
}

const allRoles =async (req , res)=> {
    try{
        const allRoles = await Role.find()

        res.status(200).send({
            apiStatus:true,
            data:allRoles
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e,
            message:'Faild To Retrive All Data'
        })
    }
}

module.exports={
    addRole,
    allRoles,


}