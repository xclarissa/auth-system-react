import { createContext, useEffect, useState } from "react";
import { IAuthContext, IAuthProvider, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();
    
    if(user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password); 
    const payload = { email, token: response.token }
    console.log(payload)

    setUser(payload)
    setUserLocalStorage(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)

  }

  return(
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      { children }
    </AuthContext.Provider>
  )
}