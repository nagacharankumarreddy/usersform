import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  console.log(usersList);
  const addUserHandlerApp = (uName, Uage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName, age: Uage} ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandlerApp} />
      {usersList.length!=0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
