const express = require('express');
const morgan  = require('morgan');

const app = express();

// Resgister ejs

app.set('view engine', 'ejs');
// if views folder doesn't match spelling use  : app.set('views', 'my_views');
app.listen(3000);

app.use(express.static('public'));

app.use(morgan('dev'));
app.get('/', (req, res) => {
    let blogs = [
        {title: 'Yoshi find eggs', snippet: 'This is an arbitary text as I dont have any lorem thing working here so please stop reading this will you'},
        {title: 'I made a time table today!', snippet: 'This is an arbitary text as I dont have any lorem thing working here so please stop reading this will you'},
        {title: 'Unable to solve kickstart questions', snippet: 'This is an arbitary text as I dont have any lorem thing working here so please stop reading this will you'}
    ]
   
    res.render('index',{title: 'Home', blogs});
});

app.get('/about', (req,res) => {
    res.render('about',{title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create',{title: 'create a new blog'});
});
//404 page .use w ill get fired only when it reaches this point.
// Therefore it's position matters
app.use((req,res) => {
    res.status(404).render('404', {title: 404});
});
