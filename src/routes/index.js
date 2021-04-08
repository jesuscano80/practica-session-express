const { Router} = require("express");

const router=Router();

router.get("/hola", (req, res)=>{
   res.render("index")
})

router.post("/register",(req,res)=>{
    req.session.userdata=req.body;
    req.flash("user", req.body);
    const {email,password}=req.body;
     res.redirect("profile");
})
 
router.get("/profile",(req,res)=>{
    const user= req.flash("user")[0];
    
    res.render("profile",{user})
    
})



module.exports= router;