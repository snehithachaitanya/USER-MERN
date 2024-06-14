import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, SetName]=useState("");
  const [age, SetAge]=useState(0);
  const [username, SetUserName]=useState("");
  useEffect(() => {
   axios.get('http://localhost:5000/users').then((response) => {
     setListOfUsers(response.data);
   });
  }, []);

  const createUser = () => {
      axios.post('http://localhost:5000/users',{
        name,age,username,
      }).then((response) => {
        alert("user created successfully");
        setListOfUsers([...listOfUsers, response.data]);
        SetName("Enter Name");
        SetAge("Enter Age");
        SetUserName("Enter Username");
      })
  };
  
  return (
    <div className="App">
      <div className="userdisplay">
        {listOfUsers.map((user) => {
          return (
            <div className="user">
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>UserName: {user.username}</p>
            </div>
          );
        })}
      </div>
      <div>
        <input type="text" placeholder="Enter Name" onChange={(e) => SetName(e.target.value)}/><br/>
        <input type="Number" placeholder="Enter Age" onChange={(e) => SetAge(e.target.value)}/><br/>
        <input type="text" placeholder="Enter UserName" onChange={(e) => SetUserName(e.target.value)}/><br/>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
