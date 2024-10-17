import React, { useEffect, useState } from 'react'

function ProfileProp({field, value, hide, disabled}) {
    const [val, setValue] = useState(value)
 
    useEffect(()=>{
        if(hide==='all'){
            setValue(value?.replace(/./g, '*'))
        }
    },[value,hide])
  return (
    <div className='info'>
        <p className="tiny">{field}</p>
        <p className='midi'>{val}</p>
    </div>
  )
}

export default ProfileProp
