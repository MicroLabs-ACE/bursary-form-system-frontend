import {  createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
function Auth({children}) {
const [Auth, setAuth] = useState(true)
const [history, setHistory]  = useState('')
useEffect(()=>{
 const zcode = JSON.parse(localStorage.getItem('zcode'))
 setAuth(zcode||false)
},[Auth])
let location = useLocation()

const navigate=useNavigate()
useEffect(() => {
  if(history===''){
    setHistory(location.pathname); 
  }
  }, [history,location.pathname]);
  
  useEffect(() => {
    if (Auth === false && location.pathname !== '/sign-in' && location.pathname !== '/confirm-otp') {
      navigate('/sign-in');
    } else if(Auth && location.pathname==='/confirm-otp'){
      if(history==='/sign-in'||history==='/confirm-otp'){
        navigate('/dashboard')
      }else {
        navigate(`${history}`); 
      }
    }
  }, [Auth, history, location.pathname, navigate]);

return(
    <AuthContext.Provider value={{Auth, setAuth, history}}>
        {children}
    </AuthContext.Provider>
    
)
}
export default Auth