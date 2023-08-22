const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const morgan = require("morgan");
const helmet=require("helmet");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/post");
const cors = require('cors');
const multer=require("multer");
const path = require("path");

dotenv.config();

connectToMongo=async()=>{ 
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected")
}
connectToMongo();

app.use("/images" , express.static(path.join(__dirname,"public/images/")));
//middleware 
app.use(cors())
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        //console.log(req.body);
        cb(null,req.body.name);
    },
});

const upload = multer(storage );
app.post("/api/upload",upload.single("file"), (req,res)=>{
    try{
        return res.status(200).json("File Uploded");
    }catch(err){
        console.log(err);
    }
})

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.listen(8800,()=>{
    console.log("Backend server is running")
})