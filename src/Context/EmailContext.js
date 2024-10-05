import {  createContext, useState } from "react";
export const EmailContext = createContext();
function Email({children}) {
const [email, setEmail] = useState('')
return(
    <EmailContext.Provider value={{email, setEmail}}>
        {children}
    </EmailContext.Provider>
    
)
}
export default Email