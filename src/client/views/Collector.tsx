import React, { Fragment } from "react";
import "../scss/collector";
import CollectorRegister from "./CollectorRegister";

const Collector: React.FC<{}> = () => {

 return (
        <>        
        <main id="collect" className="container-fluid">
                <section id="collect-2" className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-xl-5">
                         <CollectorRegister />   
                    </div>
                        
                        

                
                    <div className="col-md-7 col-xl-5">
                        <div className="p-5">
                            <h4 id="how-1" className="display-4 text-center">HOW CAN WE HELP?</h4>
                            <p id="info-text-2" className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum sapiente
                                atque iste beatae ullam itaque temporibus consequatur. Laborum quibusdam et neque
                                officiis! Inventore maiores nam quam mollitia voluptates non.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum sapiente
                                atque iste beatae ullam itaque temporibus consequatur. Laborum quibusdam et neque
                                officiis! Inventore maiores nam quam mollitia voluptates non.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum sapiente
                                atque iste beatae ullam itaque temporibus consequatur. Laborum quibusdam et neque
                                officiis! Inventore maiores nam quam mollitia voluptates non.
    		                </p>
                         </div>
                        </div>
                    
                </section>
            </main>



            {/* <footer id="footer-collect"></footer> */}



        </>



 );
 };
 export default Collector;
