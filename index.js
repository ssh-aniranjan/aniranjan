const path = require('path');
const express = require('express');
const app = express();

const port = 4000;

const staticPath = path.join(__dirname,"/public");

app.use(express.static(staticPath));
app.set('view engine',"ejs");

app.get("/",(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('*',(req,res)=>{
    res.render('error.ejs');
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})
