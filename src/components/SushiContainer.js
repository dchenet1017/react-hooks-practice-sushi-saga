import React,{ useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({sushis}) {

const [sushindex,setsushiindex]=useState(0)

function handleClick(){
 sushindex("fire")
}
  return (
    <div className="belt">
      {sushis.map(sushi => <Sushi sushi={sushi} />)}
      
      <MoreButton onClick={handleClick}/>
    </div>
  );
}

export default SushiContainer;
