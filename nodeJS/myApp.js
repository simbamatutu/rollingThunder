var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

 
//  post
//  app.route('/name')
//     .get((req,res)=>{ res.json({'name': req.query.first + ' ' + req.query.last })})
//     .post((req,res)=>{res.json({'name': req.body.first + ' ' + req.body.last })})


    
 // echo server
// app.get('/:word/echo',(req,res)=>{
//   res.json({"echo":req.params.word})
// })
 
// chaining
//  app.get('/now', function(req, res, next){
//   req.time = new Date().toString();
//   next();
// },
//   function(req, res) {
//     res.send({"time": req.time});
//   }       
// );


app.get("/json", (req, res) => { let message = "Hello json"; (process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; res.json({"message": message}); });


// var filepath= __dirname + '/views/index.html';
// app.get('/', (req,res)=>{
//   res.sendFile(filepath);
// })

// var secondpath= __dirname +'/public';
// var midware= express.static(secondpath);
// app.use(midware);






























 module.exports = app;
