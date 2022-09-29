import React from "react";


import { useEffect, useState } from "react";

const Fruits =()=>{
const [user,setUser]=useState();
const [loading, setLoading]=useState(false)
   
   useEffect(()=>{
    FruitsData()
   },[])
const FruitsData =()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then((data) =>{
            setUser(data)
            setLoading(true)
            console.log("fetched data.......>")
        })
        .catch(e =>{throw new Error,(e.message)})
    };
    if(!loading){
        console.log("loading",loading);
        return<div>loading....</div>
    }
return (
        <div>
            {user.map(item=>(
            <div key= {item.id}>  
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
         <h4 style={{color:"blue"}}>List of products</h4>
         <p style={{margin:"30px"}}>Name</p>
         <p style={{margin:"30px"}}>Category</p>
            </div>
            ))}
        </div>
    )
}
export default Fruits;