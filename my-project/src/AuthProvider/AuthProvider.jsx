
import { createContext } from "react";
import { app } from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

  const auth = getAuth(app)

   

    const userInfo = {
        name : "Hasibur rahman safin"
    }
  return <AuthContext.Provider value={userInfo}>
    {children}
    
    </AuthContext.Provider>;
};
