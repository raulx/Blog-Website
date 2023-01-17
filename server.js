const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const titleArr = []
const contentArr = []

let arrNumber = 0;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{title:titleArr,content:contentArr})
})
app.get('/about',function(req,res){
    res.render('about')
})
app.get('/compose',function(req,res){
    res.render('compose')
})
app.get('/contact',function(req,res){
    res.render('contact')
})

app.get('/fullContent',function(req,res){
    const fullTitle = titleArr[arrNumber];
    const fullDesc = contentArr[arrNumber]
    res.render('fullContent',{fullTitle:fullTitle,fullDesc:fullDesc})
})

app.post('/fullContent',function(req,res){
    const data = parseInt(req.body.data);
    arrNumber  = data;
    res.redirect('/fullContent')
})


app.post('/compose',function(req,res){
    const title = req.body.title;
    const content = req.body.content;

    titleArr.push(title);
    contentArr.push(content);
    res.redirect('/');
})
app.listen(3000,function(req,res){
    console.log('Server is listening at port 3000!')
})