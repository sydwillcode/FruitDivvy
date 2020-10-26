import React, { Fragment } from "react";
import "../scss/provider";
import ProviderRegister from "./ProviderRegister";

const Provider: React.FC<{}> = () => {
  return (
    <>
      <main id="provide" className="container-fluid align-items-center">
        <section
          id="provide-2"
          className="row justify-content-center align-items-center"
        >
          <div className="col-md-6 col-xl-5">
              <ProviderRegister />
          </div>
          <div className="col-md-7 col-xl-5">
            <div className="p-5">
              <h4 id="what-1" className="display-4 text-center">
                HOW CAN YOU HELP?
              </h4>
              <p id="info-text" className="text-center">
                Our goal is to reduce food waste and close the food insecurity gap for
                families and individuals world-wide. If you find yourself with an abundance
                of produce and would like to share that with others, you can create a secure
                provider listing that will allow others to find you. 
              </p>
              <p id="info-text" className="text-center">
                We ask that you gather all available produce, and place in an easy to find location
                at the address you provide on this form. Your actual address will never be shared with
                others; collectors and other providers will only be allowed to see your name, the produce you have
                available, a map pin on your general location, and directions to that location.
              </p>
              <h4 id="what-1" className="display-4 text-center">
                THANK YOU!
              </h4>
            </div>
          </div>
        </section>
      </main>
      {/* <footer id="footer-provide"></footer> */}
    </>
  );
};

export default Provider;
