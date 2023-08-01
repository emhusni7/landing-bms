import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>


      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
        
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
      {/* <span className="absolute left-0">
        <svg width="700" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0F62FE" d="M31.8,-35.4C45.3,-40.8,63,-38.8,68.9,-30.2C74.7,-21.6,68.8,-6.3,59.3,3.3C49.8,12.9,36.8,16.8,28.8,23.5C20.7,30.2,17.6,39.8,11.2,44.6C4.8,49.5,-4.9,49.6,-19.4,51.8C-33.9,54.1,-53.3,58.5,-61.8,51.8C-70.4,45.1,-68.2,27.3,-70.5,10.2C-72.8,-6.8,-79.5,-23.1,-75.1,-34.9C-70.6,-46.6,-54.9,-53.9,-40.6,-48.1C-26.2,-42.2,-13.1,-23.4,-2,-20.3C9.2,-17.3,18.3,-30,31.8,-35.4Z" transform="translate(100 100)" />
        </svg>
      </span> */}
      
    </Container>
  );
}

export default SectionTitle;