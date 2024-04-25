const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello Express!')
})

// use cors to fetch form cross platform
const cors = require('cors');
app.use(cors());

// 
app.use(express.json());


// lets create a array of object to use that objects as API
const users = [
    { id: 1, name: "Rayan", email: "rayan@gmail.com", phone: '0124454568' },
    { id: 2, name: "Shihab", email: "shihab@gmail.com", phone: '0124454568' },
    { id: 3, name: "Shibly", email: "shibly@gmail.com", phone: '0124454568' },
    { id: 4, name: "Noman", email: "noman@gmail.com", phone: '0124454568' },
    { id: 5, name: "Wafee", email: "wafee@gmail.com", phone: '0124454568' },
];

// to make api of the users 
app.get('/users', (req, res) => {
    res.send(users);
})

// to get each obj from the array of obj by it's id as parameter useing req.params.id
app.get('/user/:uId', (req, res) => {
    console.log(req.params.uId);
    const id = parseInt(req.params.uId);
    const user = users.find(u => u.id === id);
    res.send(user);
})


// post method
app.post('/user', (req, res) => {
    console.log('request body:', req.body); //shows to server-site console
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Port is :', port);
})