import React,{ useState } from "react";

function Sushi({sushi}) {
  console.log(sushi,)

  const[foursushi,setfoursushi]=useState(true)

  // function handleClick(){
  //     setfoursushi((foursushi) => (foursushi +4)%sushi.length)
  // }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
