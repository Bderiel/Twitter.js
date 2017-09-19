const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', function (req, res){
    res.send('hello world!');
});

app.get('/news',function(req,res){
    res.send('testing');
});


app.listen(3000, function(){
    console.log('listening');
});
