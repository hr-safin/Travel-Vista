
import { createContext } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

   

    const userInfo = {
        name : "Hasibur rahman safin"
    }
  return <AuthContext.Provider value={userInfo}>
    {children}
    
    </AuthContext.Provider>;
};
