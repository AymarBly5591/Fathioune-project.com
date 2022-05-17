

const mongoose =  require('mongoose'); 
const jwt =  require("jsonwebtoken"); 
const bcrypt =  require("bcryptjs");
const  dotenv =  require("dotenv") ;
dotenv.config();


const UserShema =  new mongoose.Schema({   
    name : {
        type:String , 
        required : true,
    },
    couriel : {
        type:String , 
        required :true,
        unique : true
    },
    telephone:{
        type: Number,
        required:true, 
        
        min :8
    },
    password : {
        type:String, 
        required :true,
        min:4
    },
    profilePicture : {
         type:String ,
         default:'',
    },
    isAdmin : {
        type: Boolean , 
        default:false,
    },
    tokens:[{
        token:{ type:String , default : "" } ,
        status:{ type:String , enum : {values :['active' , 'trashed'] },
        
    }}], 
    resetPass : { type : String , default : "" }
    },
    {timestamp : true} 
    );

// generate Auth toke
UserShema.methods.generateAuthToken =  async ()=>  {
    const user = this;
    var token =  jwt.sign({ id: user._id}, "SECRET_KEY" );
    user.token = token;
    user.status = 'active';
}
// 
UserShema.pre('save' ,  async function(next){
    const user  =  this;
    if(user.isModified("password")){
        user.password =  await bcrypt.hash(user.password , 8);
    }
    next();
})

UserShema.virtual("virtuelVar").get(
    ()=>{
        return this.firstname + " "
    }
);

const User =  mongoose.model('user',  UserShema);

module.exports =  mongoose.model('User' , UserShema);