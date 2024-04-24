const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Node js')
});

const users = [
    { id: 1, name: 'Akkas', email: 'akkas@gmail.com', phone: '0132484658' },
    { id: 2, name: 'Bkkas', email: 'bkkas@gmail.com', phone: '0123456489' },
    { id: 3, name: 'Ckkas', email: 'ckkas@gmail.com', phone: '9454566849' },
    { id: 4, name: 'Mkkas', email: 'mkkas@gmail.com', phone: '9464646433' },
    { id: 5, name: 'Lkkas', email: 'lkkas@gmail.com', phone: '1015646466' },
    { id: 6, name: 'Fkkas', email: 'fkkas@gmail.com', phone: '9733663634' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.listen(port, () => {
    console.log("My Node js port is : ", port)
})