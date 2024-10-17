// import Modal from "../components/Modal";
// import showlist from "../Assets/showlist.svg";
// import edit from "../Assets/edit.svg";
// import draft from "../Assets/draft.svg";
// import filled from "../Assets/filled.svg";
// import Navbar from "../components/Navbar";
import {Link } from "react-router-dom";
import {FormContext} from "../Context/FormContext";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/User.js";

function Dashboard() {
  const forms = useContext(FormContext);
  const user = useContext(UserContext);

  const [list, setList]= useState('')
  const [userName, setUser]= useState('')
  useEffect(()=>{
    setList(forms)
    setUser(user?.user.firstName)
    console.log(user)
  },[forms, user])
if(list===''){
  return <div className="loader"><div></div></div>
}
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
        <h6>Hello, {userName&&userName} 👋</h6>
        <p className="midi">Here is what's is happening in your workspace</p>
        </div>
        <div className="dashboard__available-forms">
          <h6>Avaliable Forms </h6>
          <div className="forms">
          {forms?.map(form=>{
            return(
              <div className="card"  key={form?.id}>
                <p className="midi">
                {form?.displayName}
                </p>
                <p className="mini">Brief description on what the form is about </p>
                 <Link
                   
                    to={`/forms/${form.name}`}
                    state={{ id: form?.name }}
                  ><button className="variant-a">+ Fill Form</button></Link>
              </div>
            )
          })}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
