import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext(null);
export const SetCurrentUserContext = createContext(null);

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      return await axios.get("dj-rest-auth/user/");
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    handleMount()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <SetCurrentUserContext.Provider value={{ setCurrentUser }}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
