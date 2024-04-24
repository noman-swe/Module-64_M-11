import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);
    const user = { name, email };

    // post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(user)
    })

      .then(res => res.json())
      .then(data => { console.log(data) })
  }

  return (
    <div className="App">
      <h3>My Own data. {users.length}</h3>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Name' required/>
        <input type="email" name='email' placeholder='Email'  required/>
        <input type="submit" value="Add User" />
      </form>

      {/* show data to ui */}

      {
        users.map(user => <p key={user.id}>{user.name} || email:{user.email}</p>)
      }

    </div>
  );
}

export default App;
