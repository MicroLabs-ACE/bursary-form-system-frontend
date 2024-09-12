import { Children, createContext, useState } from "react";
export const EmailContext = createContext();
function Email() {
const [email, setEmail] = useState('')
return(
    <EmailContext.Provider value={{email, setEmail}}>
        {Children}
    </EmailContext.Provider>
    
)
}
export default Email