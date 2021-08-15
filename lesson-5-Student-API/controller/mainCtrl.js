const Student = require('../models/student')
const Course = require('../models/course');
const { findOne } = require('../models/student');

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

const profile = async (req,res) =>{
    res.send(req.user)    
}

const activate = async (req,res)=>{
    try{
        const student = await Student.findOne({otp:req.params.otp, userStates:false})
        if(!student) throw new Error('User not found')
        student.userStates = true
        student.otp = ""
        student.save()
        res.status(200).send({
            apiStatus:true,
            data:{student},
            message:"Üser Successfuly Activated"
        })
    }
    catch(e){
        console.log(e);
        res.status(400).send({
            apiStatus:false,
            data:e,
            message:"User not found"
        })
    }
}

const deActivate = async (req,res)=>{
    try{
        const student = await Student.findOne({email:req.body.email})
        if(!student) throw new Error('User not found')
        student.userStates = false
        student.otp = Date.now()
        student.save()
        
        res.status(200).send({
            apiStatus:true,
            data:{},
            message:"User Deactivated"
        })
    }
    catch(e){
        
        res.status(500).send({
            apiStatus:false,
            data:e,
            message:"User Cannot Deactivated"
        })
    }
}

const logout = async (req,res) =>{
    req.user.tokens = req.user.tokens.filter(ele =>{
        return ele.token != req.token
    })
    await req.user.save()
    res.status(200).send({
        apiStatus:true,
        message:"User Logged out"
    })
}
module.exports = {
    showAllStudents,
    showSingleStudent,
    addStudent,
    login,
    logout,
    deleteStudent,
    addCourse,
    profile,
    activate,
    deActivate,
}