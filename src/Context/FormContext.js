import axios from "axios";
import {  createContext, useEffect, useState } from "react";
export const FormContext = createContext();
function List({children}) {
const [list, setList] = useState('')

 const getForm = async()=>{
    try {
      const response = await axios.get('https://bursary-form-system-backend.onrender.com/forms',
        {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)
    } catch (error) {
     console.log(error)
  }
}
useEffect(()=>{
    getForm()
},[])
return(
    <FormContext.Provider value={{list}}>
        {children}
    </FormContext.Provider>
    
)
}
export default List