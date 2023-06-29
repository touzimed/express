const express=require("express");
const app=express();
app.use(express.static(__dirname+'/public'))

app.use('/views',require('./routes/views'))
app.listen(5000, (err)=>{
    if(err) throw err
    else 
    console.log('The server is running, ' +
        ' please, open your browser at port 5000');
  });