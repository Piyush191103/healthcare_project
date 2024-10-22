const express= require("express");
const connectDb= require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors= require ("cors");

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


//Routes below
app.get("/",(req,res)=>{
    res.send("working")
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});