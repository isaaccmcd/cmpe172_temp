import React from "react";
import "./home.css";


function Home() {
  return (
    <div className="App">
      <section id="introduction">
           <div class="container">
               <div class="row fill-viewport align-items-center">
                   <div class="col-12 col-md-6">
                       <p1 class="text-white-70">Galaxy Shoes</p1>
                       <p class="lead text-white-70">Explore our diverse collection of popular brands</p>
					   	<div class="login-cont">
							<a class="login" href="/login.js">Login</a>
						</div>
                       <a class="signup-button" href="/signup.js" role="button">Sign up today!</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="feature-rundown">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 col-md-6 mx-auto mt-5 text-center">
                        <p2 class="advert-main">
                            The Ultimate Shoe Store
                        </p2>
                        <p3 class="advert-alt">Find the best outfit for your feet!</p3>
                    </div>
                </div>
                <div class="row mb-5">
                    <div className="homepics" class="col-12 col-md-4 text-center">
                        <a className="homecard" href="/shoes.js">
							<img src="/images/allszn.jpg" alt="allszn" class="mt-4"/>
                        	<p>
								<p3>All Seasons</p3>
                        	</p>
						</a>
                    </div>
                    <div className="homepics" class="col-12 col-md-4 text-center">
                        <a className="homecard" href="/shoes.js">
							<img src="/images/stylish.jpg" alt="stylish" class="mt-4"/>
                        	<p>
								<p3>Stylish</p3>
                        	</p>
						</a>
                    </div>
                    <div className="homepics" class="col-12 col-md-4 text-center">
                        <a className="homecard" href="/shoes.js">
							<img src="/images/sport.jpg" alt="sports" class="mt-4"/>
                        	<p>
								<p3>Sports</p3>
                        	</p>
						</a>
                    </div>
                </div>
            </div>
        </section>

        <section id = "introduction">
            <div class= "container">
                <div class= "row fill-40-viewport py-5 text-white-70 align-items-center">
                    <div class = "col-12 col-md-6">
                        <ul class= "list-unstyled">
                            <li><p3 class= "text-white">ABOUT</p3></li>
                            <li> A new platform for finding the best shoes to match your style!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
</div>
  );
}

export default Home;

