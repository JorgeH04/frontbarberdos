import React from 'react'
 import './Hero.css'
import { Link } from 'react-router-dom'
 

const Hero = () => {
    return (


        
        <section id="main-slider" class="no-margin">
        <div class="carousel slide wet-asphalt">
            <ol class="carousel-indicators">
                <li data-target="#main-slider" data-slide-to="0" class="active"></li>
                <li data-target="#main-slider" data-slide-to="1"></li>
                <li data-target="#main-slider" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item active" >
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="carousel-content centeredd">
                                    <h2 class="boxed animation animated-item-11"> 
                                    La barbería como ritual social
                                    </h2>
                                    <p class="animation animated-item-2"></p>
                                    <div className='hero-text'>

                                    <Link to='/appointment'>
                                        <button className='hero-btn'>Turnos</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <a class="prev hidden-xs" href="#main-slider" data-slide="prev">
            <i class="icon-angle-left"></i>
        </a>
        <a class="next hidden-xs" href="#main-slider" data-slide="next">
            <i class="icon-angle-right"></i>
        </a>
    </section>





    )
}

export default Hero
