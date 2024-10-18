import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Modal from '../components/Modal'
function Forms() {
  let params = useParams();
  const formName= params.formId;
  const[loading, setLoading]=useState(true)
  const[format, setFormat] = useState(null)
  const[formValues, setFormValues]=useState({})
  const[field,setField] = useState(null)
  const[formState, setFormState]=useState('active')
  const[modal, setModal]=useState(false)

 useEffect(()=>{
  if(format){
    const newForm = {}
    const keys =  Object.keys(format)
    setField(keys)
    keys.map(k=>{

      return newForm[k]= format[k]==="Number"?(0):''
    })
  setFormValues(newForm)
  setLoading(false)
  }
 },[format])
 const updateInput=(e,key)=>{
  const newForm = { ...formValues };
  if(format[key]==='Number'){
    newForm[key] =  Number(e.target.value);
  }else{
  newForm[key] = (e.target.value)
  }
  setFormValues(newForm);
 }
 const handleSubmit=()=>{
  setFormState('submitting')
  sendForm()
 }
const getFormat = async()=>{
  try{
    const response = await fetch(
      `https://bursary-form-system-backend.onrender.com/forms/${formName}`,
    {
      method:'GET',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("xToken"),
        "x-refresh-token": localStorage.getItem("rToken"),
      },
    })
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }else{
      const formFormat= await response.json()
      setFormat(formFormat[0].format)
    }
  }
  catch(err){
    console.log(err)
  }
}
  const sendForm = async () => {
    try {
      console.log("Sending form...");
      const response = await fetch(
        `https://bursary-form-system-backend.onrender.com/forms/${formName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("xToken"),
            "x-refresh-token": localStorage.getItem("rToken"),
          },
          body: JSON.stringify(formValues),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      if(response.status===201){
        setFormState('active')
        setModal(true)
      }
      console.log(response, response.status);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if(formName){
      getFormat();
    }
  }, []);
  if(loading){
    return <div className="loader"><div></div></div>
  }
  return (
    <div className="form">
      {modal&&<Modal msg='Form submitted Successfully' type={'info'}/>}
      <div className="form-section">
        <h4>{params.formId.split("-").join(" ")}</h4>
       <div className="form-inputs">
        {field?.map(inp=>{
          return(
           <div key={inp} className="inps">
            <label>{inp}</label>
             <input type={`text`} name={inp} value={formValues[inp]} onInput={(e)=>updateInput(e,inp)} />
            </div>
          )
        })}
       </div>
        <button className="variant-a" onClick={handleSubmit}>{formState==='active'?('Submit Form'):('Submitting')}</button>
      </div>
    </div>
  );
}

export default Forms;
