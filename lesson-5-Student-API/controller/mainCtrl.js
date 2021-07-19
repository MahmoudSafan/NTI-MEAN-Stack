const Student = require('../models/student')

const showAllStudents = async (req,res)=>{
    try{
        let students = await Student.find({})
        console.log(students);
        res.status(200).send({
            apiStatus:true,
            data:{students},
            message:'Retrive all data'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e,
            message:'Vailed to retrive all data'
        })
    }
}

const addStudent = async (req,res) => {
   try{
        // console.log(req.body.name);
        const studentData = new Student(req.body)
        // console.log(studentData);
        studentData.save()

        res.status(200).send({
            apiStatus: true,
            data: studentData,
            message:"Student successfully inserted"
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send({
            apiStatus: false,
            data: e,
            message:"User Inserted Rejected"
        })
    }
}

const login = async (req,res)=>{
    try{
       student =  await Student.login(req.body.email,req.body.password)
       student.generateToken()
       console.log(student);

       res.status(200).send({
           apiStatus:true,
           data:{student},
           message:"User Successfully logged"
       })
    }
    catch(e){
        console.log(e);
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"User Failled to login"
        })
    }
}

const deleteStudent = async (req,res)=>{
    try{
        await Student.deleteUser(req.body.email)

        res.status(200).send({
            apiStatus:true,
            message:"User Deleted Successfully"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"Invalid User Email"
        })
    }
}

module.exports = {
    showAllStudents,
    addStudent,
    login,
    deleteStudent

}