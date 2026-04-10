const express=require("express");
const morgan=require("morgan");
const userRouter = require("./routes/userRoute");
const postRoute=require("./routes/postRoute");

const app=express();
const port=3000;

app.use('/users',userRouter);
app.use('/posts',postRoute);

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});