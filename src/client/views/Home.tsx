import React, { Fragment } from "react";
import "../scss/home";
import { Link } from "react-router-dom";


const Home: React.FC<{}> = () => {

  return (
    <>
      <div id="page-container">
        <main className="container-fluid homepage">
          
          
        <div className="container-fluid" id="home-logo">
    <img className="home" src="/assets/welcome-logo-01.png" alt=""/>

            
        
          {/* <section id="btn-nav" className="row"> */}
            <div className="col-md-5">
              <div
                className=" d-flex btn-group justify-content-between"
                role="group"
                aria-label="Basic example"
              >
                <Link to="/login">
                  <button id="login-btn" type="button" className="custom-btn-home">
                    <span className= "p-3">LOGIN</span> 
                  </button>
                </Link>
                <Link to="/provider">
                  <button type="button"className="custom-btn-home">
                    <span className= "p-3">GIVE FOOD</span>
                  </button>
                </Link>
                <Link to="/collector">
                  <button id="get-food" type="button" className="custom-btn-home ml-5">
                    <span className= "p-3">GET FOOD</span>
                  </button>
                </Link>
              </div>
            </div>

            </div>
            
          {/* </section> */}
        </main>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner text-center">
            <div className="carousel-item active text-center">
            <h1 className="caro-title mt-4">WHAT IS IT?</h1>
                        
                        <p className="carousel-info">
                            In the United States food waste is estimated to be between 30-40 percent
                            of the food supply. This estimate based on estimates from USDA Economic
                            Research Service of 31 percent food loss at the retail and consumer levels,
                            corresponded to approximately 133 billion pounds and $161 billion worth of food 
                            in 2010. We aim to connect those who grow produce with individuals or groups who 
                            are food-insecure, reducing waste and providing vaulable nutrition to those in need.
                    
                        </p>
            </div>
            <div className="carousel-item">
            <h1 className="caro-title mt-4">WHO ARE WE?</h1>
                        
                        <p className="carousel-info">
                            We are a non-profit organization inspired by the Coronavirus 
                            Pandemic to meet the needs of those in search of produce.
                        </p>
            </div>
            <div className="carousel-item">
            <h1 className="caro-title mt-4">WHAT WE DO?</h1>
                        
                        <p className="carousel-info">
                            The Coronavirus Pandemic can be frightful. We aim to eradicate the fear
                            of food shortages by connecting those who are in need of produce
                            to those who have an excess of produce. Although the word virus may be frightening, we strive to make
                            kindness go viral and smiles infectious. 
                        </p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <footer id="footer"></footer>
    </>
  );
};

export default Home;
