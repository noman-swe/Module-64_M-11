const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

// lets create a array of object to use that objects as API
const users = [
    {id: 1, name: "Rayan", email: "rayan@gmail.com", phone: '0124454568'},
    {id: 2, name: "Shihab", email: "shihab@gmail.com", phone: '0124454568'},
    {id: 3, name: "Shibly", email: "shibly@gmail.com", phone: '0124454568'},
    {id: 4, name: "Noman", email: "noman@gmail.com", phone: '0124454568'},
    {id: 5, name: "Wafee", email: "wafee@gmail.com", phone: '0124454568'},
];

// to show the user to 

app.listen(port, () => {
    console.log('Port is :', port);
})