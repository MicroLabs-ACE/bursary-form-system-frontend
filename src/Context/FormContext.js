import axios from "axios";
import {  createContext, useContext, useEffect, useState } from "react";
import instance from "./Base_url";
import Auth from "./AuthContext";
export const FormContext = createContext();
function List({children}) {
const [list, setList] = useState('')
 const getForm = async()=>{
    try {
      const response = await instance.get('/forms',
        {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':localStorage.getItem('xToken'),
          'x-refresh-token':localStorage.getItem('rToken'),

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