const express = require('express');
const app = express();


const port = process.env.PORT || 5000 ;


const courses = require('./data/courses')

const cors = require('cors');
app.use(cors());

app.get('/', (req ,res)=>{
    res.send('The server is running');
});


app.get('/courses', (req, res)=>{
    res.send(courses)
    // console.log(courses);
})



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});