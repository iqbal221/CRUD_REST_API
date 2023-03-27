const express = require('express');
const cors = require('cors')
const router = require('./routes/v1/users.route');
const app = express()
const PORT = 5000;

// middleware
app.use(express.json())
app.use(cors())

// server test
app.get('/',(req,res)=>{
    res.send('Assignment server is running')
})


app.use('/api/v1/',router)


// server running port
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})