const Student = require('../models/student')
const Course = require('../models/course')

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

const showSingleStudent = async (req,res)=>{
    try{
        let student = await Student.find({'userId':req.params.userId})
        res.status(200).send({
            apiStatus:true,
            data:{student},
            message:'Retrive Student data'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e,
            message:'Vailed to retrive  data'
        })
    }

}

const addStudent = (req,res) => {
   try{
        const studentData = new Student(req.body)
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

const addCourse = (req,res) =>{
    try{
        
        const courseData = new Course(req.body)
        courseData.save() 
        
        res.status(200).send({
            apiStatus:true,
            data:courseData,
            message:"Course successfully add"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e,
            message:"Invalid course data"
        })
    }
}


module.exports = {
    showAllStudents,
    showSingleStudent,
    addStudent,
    login,
    deleteStudent,
    addCourse,
}