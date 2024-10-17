import {  createContext, useState, useEffect } from "react";
export const UserContext = createContext();
function User({children}) {
const [user, setUser] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const getUser = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        "https://bursary-form-system-backend.onrender.com/users/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("xToken"),
            "x-refresh-token": localStorage.getItem("rToken"),
          },
        }
      );
      if (response.ok) {
        const result = await response.json()
        setUser(result);
        setLoading(false)
      }
      else{
      setError(true);
        throw new Error("not okay");
        
      }
     
    } 
    catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    const xtoken = localStorage.getItem("xToken");
    if (xtoken) {
      getUser();
    }
  }, []);
return(
    <UserContext.Provider value={{user,loading, setLoading, error}}>
        {children}
    </UserContext.Provider>
    
)
}
export default User