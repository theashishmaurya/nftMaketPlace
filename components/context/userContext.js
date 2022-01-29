import { createContext, useState } from "react";
export const UserAddressContext = createContext("");

export const UserAddressProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <UserAddressContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserAddressContext.Provider>
  );
};
