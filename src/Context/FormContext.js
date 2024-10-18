import {  createContext, useEffect, useState } from "react";
export const FormContext = createContext();
function List({children}) {
const [list, setList] = useState('')
const [error, setError] = useState(false)

const getForm = async () => {
  try {
    const response = await fetch(
      "https://bursary-form-system-backend.onrender.com/forms",
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
      setList(result);
    }
    else{
      throw new Error("not okay");
      
    }
   
  } 
  catch (err) {
    setError(true);
    console.log(error)
  }
};
useEffect(() => {
  const xtoken = localStorage.getItem("xToken");
  if (xtoken) {
    getForm();
  }
}, []);
return(
    <FormContext.Provider value={list}>
        {children}
    </FormContext.Provider>
    
)
}
export default List