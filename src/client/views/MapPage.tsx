import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../scss/home";
import Map from "./Map";

const MapPage: React.FC<{}> = () => {

  return (
    <>
     <Map/>
    </>
  );
};

export default MapPage;
