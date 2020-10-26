import React, { useState, useEffect, Fragment } from "react";
import "../scss/provider-detail";

const ProviderDetail: React.FC<{}> = (props) => {
  var renderedOutput = props.selected.fruit.map(item => <div className= "fruitItem mt-1 mb-1 ml-1 mr-1" key={item}> {item} </div>)

  return (
    <>
      <div className="detailCard my-auto">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title mt-0 mb-2">{props.selected.name}</h5>
            <hr className= "detailRule"></hr>
            <div className= "mt-1 mb-2">
              <img className="detail-logo" src="./assets/detail-logo.svg" alt="produce-provided-logo"/>
              <h6>produce available at this location:</h6>
            </div>
            <div className= "detailText">
                {renderedOutput}           
            </div>
            <hr className= "detailRule"></hr>
            <a className="linkText" href={`http://maps.google.com/maps?q=${props.selected.lat},${props.selected.lng}`} target="_blank">open in google maps</a>
          </div>
        </div>
      </div>
    </>
  );
};

// // interface ProviderRegisterProps {
// //   id: string;
// //   email: string;
// //   password: string;
// //   key: string;
// //   img: string;
// //   location: string;
// // }

export default ProviderDetail;
