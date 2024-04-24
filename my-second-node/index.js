const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello Node js')
});

app.listen(port, () => {
    console.log("My Node js port is : ", port)
})