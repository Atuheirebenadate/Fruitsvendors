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
            </div>
            ))}
        </div>
    )
}
export default Fruits;