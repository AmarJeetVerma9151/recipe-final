import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Pagenotfound  = () => {
    
  return (
    <div>
       <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    
  />
        <div className='col-sm-1 m-auto'>
        <Link style={{width:"200px"}} className='btn btn-danger' to="/">Back To Homepage</Link>
        </div>
         </div>
  )
}

export default Pagenotfound 