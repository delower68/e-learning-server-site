const express = require('express');
const app = express();


const port = process.env.PORT || 5000 ;


const courses = require('./data/courses')

const cors = require('cors');
app.use(cors());



app.get('/', (req ,res)=>{
    res.send('The server is running');
});



// get the all courses here 
app.get('/courses', (req, res)=>{
    res.send(courses)
})



// get the single course here 
app.get('/courses/:id', (req, res)=>{
    const course = req.params.id
    const singleCourse = courses?.find((p)=> p._id == course);


    // if anyone wanna get the value that is out of our server
    if (!singleCourse) {
        res.send('we can not find your result')
    }

    else{
        res.send(singleCourse)
    }
})



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});


module.exports = app;