
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});



app.get('/', function (req, res){
    res.send('hello world!');
});

app.get('/news',function(req,res){
    res.render( 'index', {title: 'Hall of Fame', people: locals.people} );
});



app.listen(3000, function(){
    console.log('listening');
});
app.use(function (req, res, next) {
    // do your logging here
     console.log(req.method ,req.url)
     next();
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})


// app.set('view engine', 'html'); // have res.render work with html files
// app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views'); // point nunjucks to the proper directory for templates

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

