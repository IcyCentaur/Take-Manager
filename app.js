const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not_found.js')
const errorHandler = require('./middleware/error_handler')

require('dotenv').config()

//middleware
app.use(express.static('./public'));
app.use(express.json());


//routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, console.log(`Listening everything on ${port}....`));

    } catch (err){
        console.log(err);
    }
}


start()

