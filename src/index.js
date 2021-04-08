const express=require ("express");
const session= require("express-session");
const flash =require("connect-flash");
const app=express();
const path=require("path");
const rutas = require("./routes/index")

//Settings
app.set("views", path.join(__dirname , "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:"mysecret"
}))
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Routes
app.use(rutas);

app.listen(3000, ()=>{
    console.log("server on port", 3000);
})

