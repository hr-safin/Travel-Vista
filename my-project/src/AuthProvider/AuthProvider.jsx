
import { createContext, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

  const auth = getAuth(app)
  const [user, setUser] = useState(null)

   


    
  return <AuthContext.Provider value={userInfo}>
    {children}
    
    </AuthContext.Provider>;
};
