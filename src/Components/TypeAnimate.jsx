import React from "react";
import { TypeAnimation } from 'react-type-animation';

const TypeAnimate = () => {
  return (
    <div className="typing-animation">
      <TypeAnimation className="by"  sequence={[
        // Same substring at the start will only be typed out once, initially
        '-Hello World',
       
      ]}
      wrapper="span"
      speed={150}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}/>
      
    </div>
  );
};

export default TypeAnimate;
