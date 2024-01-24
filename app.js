const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes')

const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://demo:demo1234@cluster0.ry7z5d0.mongodb.net/node-cluster?retryWrites=true&w=majority';
mongoose.connect(dbURI)
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');
//app.set('views', 'myviews'); // if you have changed the path of views or renamed

//middleware and static
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//mongoose and mongo sandbox route


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p> About Page</p>');
    res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
