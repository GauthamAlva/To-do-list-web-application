const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
let items=["eat","sleep","repeat"];
let work=["plan","execute","Think"];
app.set('view engine','ejs')
app.get("/",function(req,res){
    let date=new Date();
 

let option={
    weekday:"long",
    day:"numeric",
    month:"long"

};
let days=date.toLocaleDateString("en-US",option);

res.render("lists",{listTitle:days,theitem:items});
});



app.listen(3000,function(){
    console.log("server has strated on port 3000");
});

app.post("/",function(req,res){
     item= req.body.item;
     if(req.body.list==="Work"){
         work.push(item);
         res.redirect("/work");
     }
     else{ items.push(item);
  res.redirect("/");}
     // res.send(item);
 });
 app.get("/work",function(req,res){
   
 res.render("lists",{listTitle:"Work List",theitem:work});
 });
 app.post("/work",function(req,res){
     let item=req.body.item;
     work.push(item);
     res.redirect("/work");
 })
