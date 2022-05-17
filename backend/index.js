
const  express = require("express");
const  mongoose =  require("mongoose") ;
const helmet =  require("helmet");
const  morgan =  require("morgan");
const dotenv =  require("dotenv");
const body_parser =  require("body-parser")
dotenv.config();

const app = express();
// routes
const  authRoute =  require("./routes/auth")


//connnect mongoose
mongoose.connect("mongodb://localhost:27017/shop" , { useNewUrlParser: true,
useFindAndModify: false,
useCreateIndex: true,
useUnifiedTopology: true},  ()=>{
    console.log("MongoDb Connected");
});

app.use(morgan("common"));
app.use(helmet())
app.use(express.json)
app.use("/api/auth" , authRoute);


app.listen(8080 , ()=>{
    console.log("Appliation Stated sur 8080 ....")
})


// middleware
//port
