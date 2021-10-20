import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {
  console.log(sushis,"second")
  return (
    <div className="belt">
      {sushis.map(sushi => <Sushi sushi={sushi} />)}
      
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
