require('dotenv').config();
const express=require('express');

const app=express();
const expressLayout = require('express-ejs-layouts');
const connectDB=require('./server/config/db');


const PORT=4000||process.env.PORT;

//connect to db
connectDB();

app.use(express.static('public'));

//templating engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
});
