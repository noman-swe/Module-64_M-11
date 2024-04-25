import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log({ name, email }) //showing name and email as a obj to the console 
    const user = { name, email }; // ei data ta ami nilam frontend/client-site theke now eita k pathaiite hobe server-site e

    // post data to server
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(user)
    })

      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
      })

  }

  return (
    <div className="App">
      {/* show the data from the localhost of expressJs. */}
      <h3>Total users : {users.length}</h3>

      {/* add extra user by input to ui */}
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='Name' />
        <input type="email" name="email" id="" placeholder='Email' />
        <input type="submit" value="Add User" />
      </form>

      {/* show the users in ui */}
      {
        users.map(u =>
          <ul key={u.id}>
            <li> <p>Id: {u.id} & Name: {u.name} & Email: {u.email}</p> </li>
          </ul>
        )
      }

    </div>
  );
}

export default App;
