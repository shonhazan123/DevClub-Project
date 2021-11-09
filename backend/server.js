const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/example', (req,res)=> {
    res.send('hi from the server')
})

app.listen(8080, ()=> {
    console.log('app is running on port 8080');
})