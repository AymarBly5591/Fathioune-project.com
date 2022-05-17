
const User= require("../models/UserShop")
const  router =  require("express").Router();
const Email = require("../helper/email");


router.post("/registrer" , async(req  ,  res)=>{
    try{
        const  user  =   new User({name :  req.body.name ,  
            email : req.body.email ,
            telephone:req.body.telephone,
            password :req.body.password}) ;
        user.save();
        res.status(201).json(user);
        Email.EnvoieEmail(
            user.email,
            "Creation de votre compte sur Fathioune" ,
            "<h1>Votre compte a été créer avec succès <a href='localhost:3000/signin' style='color:blue'></a></h1>" 
        )
    }catch(error){
        res.status(400).json({error :true , message : error.message })
    }
})

router.post("/login"  ,  async(req,  res)=>{
    try{
        const  user = await User.findOne({couriel : req.body.couriel ,  password :  req.body.password});
        const  token  =  user.generateAutToken();
        user.save()
        res.status(200).json({user , token});
    }catch(error){
        res.status(200).json({message : error.message })
    }
})



router.post("/getuser" ,  async(req , res)=>{
    try {
        const  user  =   User.find({})
        res.status(200).json(user)
        
    } catch (error) {
        res.status(400).json({error:true , message : error.message })
    }
})



module.exports = router;