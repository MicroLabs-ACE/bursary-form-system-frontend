import React, { useContext, useEffect, useState } from "react";
import profileImg from "../Assets/profile.png";
import edit from "../Assets/edit.svg";
import { UserContext } from "../Context/User.js";
import ProfileProp from "../props/profileProp.js";
function Profile() {
  const myProfile = useContext(UserContext)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const error= useState(myProfile?.error);


  useEffect(()=>{
    setUser(myProfile?.user)
  },[myProfile])
  useEffect(()=>{
    setLoading(myProfile?.loading)
  },[myProfile?.loading])
  if(loading){
    return <div className="loader"><div></div></div>
  }
  if(error){
    return <div className="errormsg">
      Error loading profile, please reload
    </div>
  }
  return (
    <div className="profile">
        <div className="profile__avatar card">
        <div className="avatar"><img src={profileImg} alt="user" /></div>
        <button className="variant-b">Remove</button>
        </div>
        <div className="profile__information">
          <div className="card">
            <h6>Personal  information</h6>
            <div className="info-list">
            <ProfileProp field={'First Name'} value={user?.firstName}/>
            <ProfileProp field={'Last Name'} value={user?.lastName}/>
            <ProfileProp field={'Email address'} value={user?.email}/>
            <ProfileProp field={'Phone'} value={user?.phoneNumber}/>
            <ProfileProp field={'Salutation'} value={user?.salutation}/>
            </div>
          </div>
          <div className="card">
            <h6>Employment  information</h6>
            <div className="info-list">
            <ProfileProp field={'Staff Code'} value={user?.staffCode} hide={'all'}/>
            <ProfileProp field={'Staff Category'} value={user?.isAcademic?('Academic'):('Non Academic')}/>
            <ProfileProp field={'Grade'} value={'unavail'} hide={'all'}/>
            <ProfileProp field={'Employment Type'} value={user?.isPermanent?('Permanent'):('Temporary')}/>
            <ProfileProp field={'Affliation'} value={'Unavail'} hide={'all'}/>
            <ProfileProp field={'Payroll ID'} value={user?.payrollId} hide={'all'}/>
            </div>   
          </div>
          <div className="card">
            <div className="info-head">
            <h6>Payment  information</h6>
            <p className="midi">Edit <img src={edit} alt="edit"/></p>
            </div>
            <ProfileProp field={'Account Details'} value={user?.salaryAccount?.accountNumber}/>
            <ProfileProp field={'Account Name'} value={user?.salaryAccount?.accountName}/>
            <ProfileProp field={'Bank'} value={user?.salaryAccount?.bank}/>
          </div>
        </div>
    </div>
  );
}

export default Profile;
