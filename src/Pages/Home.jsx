import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Home = () => {
    const [item, setitem] = useState([]);
    let searchRef = useRef()
    const [search, setsearch] = useState("search");
    let getrecipe = async () => {
        // let res =await fetch("https://api.edamam.com/search?q=chicken&app_id= 728c4cf5 &app_key=9068f621f29937090a9096e98b260ab1")
        //     let data=

        let res = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=728c4cf5&app_key=9068f621f29937090a9096e98b260ab1`)
        console.log(res.data.hits)
        setitem(res.data.hits)

    }
    
    useEffect(() => {
        getrecipe()
    },[search])

const handlesearch = (e)=>{
    e.preventDefault()
    let search = searchRef.current.value
    // console.log(search)
    // console.log("hello")
    setsearch(search)
    searchRef.current.value=""

}

const wishlisthandle=(ele,index)=>{
    console.log("hello")
    console.log(ele)
    console.log(index)

}


    return (
        <div>
           <div className='col-sm-4 m-auto'>
           <form className="d-flex" role="search">
        <input  ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handlesearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>
           </div>

            <div className='row m-4 p-0 justify-content-center gap-4'>
                {
                    item.map((ele, index) => {
                        return <div className="card" style={{ width: '18rem' }}>
                            <img  src={ele.recipe.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
                                <p className="card-text"></p>
                                <Link state={ele}  to="/single" className="btn btn-primary" >view recipe</Link>
                                <Link state={ele} onClick={()=>wishlisthandle(ele)} className='ms-1 btn btn-success'to="/Wishitem">Wish List</Link>
                            </div>
                        </div>

                    })
                }
            </div>

        </div>
    )
}

export default Home