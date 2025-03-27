import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Cards from "../Component/Cards";
import axiosInstance from "../axios/axiosInstance";

function HomePage() {
  const [produsts,setProducts]=useState([])
  useEffect(()=>{
    axiosInstance.get("products/getproducts").then((res)=>{
      console.log("Successfully routed the Products");
      console.log(res);
      setProducts(res.data)
    }).catch((error=>{
      alert("someting went WRONG")
      console.log(error);
      
    }))
    //this is the url -->  http://localhost:4873/products/getproducts
    // http://localhost:4873/ --> is the base url is set in axios Instance
  },[])
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row mt-2 g-1">
        {
              produsts.map((product)=>(
                <div className="col-md-4">
                  <Cards  item={product}/>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
