const express = require("express");
const userRouter = express.Router();

const users=[
    {id:1,name:"John Doe",email:"john.doe@example.com",role:"admin"},
    {id:2,name:"Jane Smith",email:"jane.smith@example.com",role:"user"},
    {id:3,name:"Alice Johnson",email:"alice.johnson@example.com",role:"user"}
];
userRouter.get("/",(req,res)=>{
    res.json(users);

});
userRouter.get("/:id",(req,res)=>{
    res.json({message:`Get user with ID ${req.params.id}`});
});
userRouter.put("/:id",(req,res)=>{
    res.json({message:`User updated`});
}); 
userRouter.delete("/:id",(req,res)=>{
    res.json({message:`User deleted`});
});
module.exports=userRouter;
