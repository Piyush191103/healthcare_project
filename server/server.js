const express= require("express");
const connectDb= require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors= require ("cors");
const hbs = require("hbs");
const path = require("path");

// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port= process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//Error handling
app.use(errorHandler);



// Route for user registration and authentication
app.use("/api/register", require("./routes/userRoutes"));

// using hbs
app.set('view engine','hbs');


//Routes below
app.get("/",(req,res)=>{
    res.send("working")
});

app.get("/home",(req,res)=>{
    // let user =  user.findone({id:})
    res.render("home",{ 
        username:"Piyush",
        age : 20,
    })
});


app.get("/user",(req,res)=>{
    // let user =  user.findone({id:})
    const users = [
        { username: "Piyush", age: 20 },
        { username: "Aditi", age: 22 },
        { username: "Pratham", age: 21 }
    ];
    
    res.render("user",{users})
});

hbs.registerPartials(path.join(__dirname, '/views/partials'));


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});