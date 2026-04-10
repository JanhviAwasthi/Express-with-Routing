const express=require('express');
const postRoute=express.Router();

const posts=[
    {id:1,title:"First Post",content:"This is the first post.",authorId:1},
    {id:2,title:"Second Post",content:"This is the second post.",authorId:2},
    {id:3,title:"Third Post",content:"This is the third post.",authorId:1}  
];
postRoute.get('/',(req,res)=>{
    res.json(posts);
});
postRoute.get('/:id',(req,res)=>{
    res.json({message:`Get post with ID ${req.params.id}`});
});
postRoute.put('/:id',(req,res)=>{
    res.json({message:`Post updated`});
});
postRoute.delete('/:id',(req,res)=>{
    res.json({message:`Post deleted`});
});
module.exports=postRoute;
