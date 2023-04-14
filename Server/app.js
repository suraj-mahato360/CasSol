const express = require('express')
const connectDB = require("./config/dbConnection")
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

connectDB()
const app = express();
// const user = require('./model/Schema')

const port = process.env.PORT || 5000;
// const route = require('./routes.js');

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('connection successfull')
// }).catch((err) => console.log('no connection'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use("/api/user", require('./routes.js'));


app.listen(port, ()=> {
    console.log(`server is running at port no ${port}`)
})

