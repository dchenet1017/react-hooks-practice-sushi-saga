import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useState } from 'react'
import { useEffect } from 'react'

const API = "http://localhost:3001/sushis";


function App() {

    const [sushifood, setsushifood]=useState([])

    useEffect(() => {
      fetch(API)
      .then(r => r.json())
      .then(data => setsushifood(data))
    },[])
    
console.log(sushifood,"first")

  return (
    <div className="app">
      <SushiContainer sushis={sushifood} />
      <Table />
    </div>
  );
  
}



export default App;
