import React from 'react'
import { useLocation } from 'react-router'

const Wishitem = () => {
  const location = useLocation ()
  console.log(location.state.recipe)
  let data = location.state.recipe

  return (
    <div>
<img src={data.image} alt="" />
      <h5>{data.label}</h5>
     
    </div>
  )
}

export default Wishitem