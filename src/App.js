import { useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
import Users from "./data/Users";

function App() {
  const [usersList, setUsersList] = useState(Users.users);

  const deleteUserHandler = (userId) => {
    Users.deleteUser(userId);
    setUsersList();
  };

  /**
   * @param {Users} user
   */
  const addUserHandler = (user) => {
    // Users.users.push(user);
    // const newList = [...Users.users];
    // setUsersList(newList);

    setUsersList((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
