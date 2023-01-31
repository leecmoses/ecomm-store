import { createContext, useState } from "react";

// Actual value to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider Component that will be the parent that gives access to the children components
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
