import React, { createContext, useContext, useState, useEffect } from "react";

let Users = JSON.parse(localStorage.getItem("users-adminpanel"));
// let User = JSON.parse(localStorage.getItem("user"));

const UserContext = createContext({
  state: [],
  setState: () => {},
  user: null,
  loginHandler: () => {},
  logoutHandler: () => {},
});

const UserProvider = ({ children }) => {
  const [state, setState] = useState(Users ? Users : []);
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users-adminpanel", JSON.stringify(state));
  }, [state]);

  const loginHandler = (user) => {
    setUser(user);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  const userContextValue = {
    state,
    setState,
    user,
    loginHandler,
    logoutHandler,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};
export default UserProvider;
