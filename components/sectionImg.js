import React from "react";

const SectionImg = (props) => {
    return (
      <div
        
        className={`relative h-48 w-48 md:h-96 md:w-96`}>
        {props.children}
      </div>
    );
  }
  
  export default SectionImg;

