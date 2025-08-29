const express = require('express');
const scanRoutes = require('./routes/scan');

const app = express();
app.use(express.json());

app.use('.api/scan', scanRoutes)

app.get('/api/health', (req, res) => {
    res.json({status: "ok"})
})
console.log(process.env.port)

const port = process.env.port || 3000;
app.listen(port, ()=> {
    console.log(`liisting to port ${port}`)
})