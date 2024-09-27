import React from 'react'
import Navbar from '../components/Navbar'
import {useParams } from 'react-router-dom';


function Forms() {
  let params = useParams();
  // console.log(params.formId); 
  // console.log(useLocation().state.id)
  return (
    <div className='form'>
      <Navbar/>
      <div className='form-section'>
        <h4>
     {params.formId.split('-').join(' ')}
        </h4>
        <button className='variant-b'>Faculty/Department/Institute/Unit</button>
        <button className='variant-b'>Fund/Cost Center</button>
        <button className='variant-b'>Estimated Cost(N)</button>
        <button className='variant-b'>Amount in words</button>
        <button className='variant-b'>Name</button>
        <button className='variant-b'>Email Address:</button>
        <button className='variant-b'>Upload a clear image of your signature</button>
        <button className='variant-b'>Upload a clear image of your signature</button>
        <button className='variant-a'>Generate Receipt</button>

      </div>
    </div>
  )
}

export default Forms