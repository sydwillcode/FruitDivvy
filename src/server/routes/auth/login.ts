import { Router } from 'express';
import * as mysql from 'mysql';

const router = Router(); 
// post route 
// make request on body from express 
// search sql base for user with that email with conditional that tells user if doesn't exist or will match user email and password 
// router.post('/login', (req, res) => {
//     // if(/*user is found*/){
//     //     res.redirect('/welcome')
//     // }
//     const user = User.findOne({email: req.body.email});
//     if(user.email === req.body.email && user.password === hashed(req.body.password)){
//         res.redirect("/api/welcome")
//     }else{
//         res.redirect("/login")
//     }
// })
router.get("/", (req, res)=>{
    res.json({msg:"Login here"})
});
router.post("/",(req,res)=>{
    const {email, password} = req.body;
    console.log("Email", email);
    console.log("Password", password);
    if(email === "email" && password === "password"){
        res.redirect("/map")
    }else{
        res.json({msg: "Wrong info"});
        res.redirect("/auth/login")
    }
})

export default router; 
