import {  createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
function Auth({children}) {
const [Auth, setAuth] = useState(false)
useEffect(()=>{
 const zcode = JSON.parse(localStorage.getItem('zcode'))
 setAuth(zcode||false)
},[Auth])
return(
    <AuthContext.Provider value={{Auth, setAuth}}>
        {children}
    </AuthContext.Provider>
    
)
}
export default Auth