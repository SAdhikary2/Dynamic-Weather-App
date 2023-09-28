const express=require('express')
const app=express();
const port=process.env.PORT || 3000;
const path=require('path')
const hbs=require('hbs')




const staticpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')


//SETTING VIEW ENGINNE
app.set('view engine', 'hbs');
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//path set for hbs css
app.use(express.static(path.join(__dirname,'../public')))


// STATIC PATH 
// app.use(express.static(staticpath))





//ROUTING
app.get('',(req,res)=>{
    res.render('index')
})


app.get('/about',(req,res)=>{
  res.render('about')
})


app.get('/weather',(req,res)=>{
    res.render('weather')
})


app.get('*',(req,res)=>{
    res.render('404',{
       errormessage:'try again !!' 
    })
})


app.listen(port,()=>{
    console.log(`port listining at ${port}`);
})