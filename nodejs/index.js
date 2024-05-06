const express = require('express')
const cors = require('cors') 
const fs = require('fs')
require("./config/db").connectToDB();
require("dotenv").config();


const app = express();
const PORT = 5000;
const data = JSON.parse(fs.readFileSync('./datas/data.json'))
const userRoute = require("./routes/userRoutes");


app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

app.get('/',(req,res)=>{
    res.send('Hello World')
}) 

app.get('/api/data/read',(req,res)=>{
    res.status(200).json({
        status:'success',
        count: data.length,
        data:{
            data:data
        }
    })
})

app.post('/api/data/write',(req,res)=>{

    const newId= data[data.length-1].id+1

    const newData =Object.assign({id:newId},req.body)

    data.push(newData)

    fs.writeFile('./datas/data.json',JSON.stringify(data),(err)=>{
        res.status(200).json({
            status:'success',
            data:{
                data:newData
            }
        })
    })

res.send('Created')
})

app.listen(PORT,()=>{
    console.log('server running')
})