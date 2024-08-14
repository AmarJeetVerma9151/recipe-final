import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Single = () => {
  let location = useLocation()
  console.log(location.state)
  return (
    <div className='container mt-2'>

      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4 p-3">
            <img src={location.state.recipe.image} className="col-md-12 col-12 rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">{location.state.recipe.label}</p>
              <Link to={location.state.recipe.url} className="btn btn-danger">How to Make</Link>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="row gap-3 text-center">
                <div className="col-3 border border-primary p-2 ">
                  <h6>Suger</h6>
                  <span>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)}</span>
                  <span>{location.state.recipe.totalNutrients.SUGAR.unit}</span>
                </div>
                <div className="col-3 border border-secondary p-2">
                  <h6>Calcium</h6>
                  <span>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</span>
                  <span>{location.state.recipe.totalNutrients.CA.unit}</span>
                </div>
                <div className="col-3 border border-info p-2">
                  <h6>Carbs</h6>
                  <span>{Math.ceil(location.state.recipe.totalNutrients.CHOCDF.quantity)}</span>
                  <span>{location.state.recipe.totalNutrients.CHOCDF.unit}</span>
                </div>
                <div className="col-3 border border-dark p-2">
                  <h6>holesterol</h6>
                  <span>{Math.ceil(location.state.recipe.totalNutrients.CHOLE.quantity)}</span>
                  <span>{location.state.recipe.totalNutrients.CHOLE.unit}</span>
                </div>
                <div className="col-3 border border-warning p-2">
                  <h6>Iron</h6>
                  <span>{Math.ceil(location.state.recipe.totalNutrients.FE.quantity)}</span>
                  <span>{location.state.recipe.totalNutrients.FE.unit}</span>
                </div>
                <div className="col-3 border border-denger p-2">
                  <h6>Fiber</h6>
                  <span>{Math.ceil(location.state.recipe.totalNutrients.FIBTG.quantity)}</span>
                  <span>{location.state.recipe.totalNutrients.FIBTG.unit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {location.state.recipe.ingredientLines.map((ele)=>{
      return <li>{ele}</li>
    })}

    </div>
  )
}

export default Single