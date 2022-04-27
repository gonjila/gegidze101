import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://178.63.13.157:8090/mock-api/api/users`)
      .then((res) => res.json())
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <userContext.Provider value={{ users }}>{children}</userContext.Provider>
  );
};

export default UserContextProvider;
