import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandlerApp = (uName, Uage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName, age: Uage} ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandlerApp} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
