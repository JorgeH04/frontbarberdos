import React from 'react'
//import './Hero.css'
import { Link } from 'react-router-dom'
 

const About = () => {
    return (
<>



<section id="about-us" class="container">
        <div class="row">
            <div class="col-sm-6">
                <h2>Quienes somos</h2>
                <p>Rescatamos el arte de las antiguas barberías y la experiencia que en ellas se vivía.
Conjuntamos tradiciones, servicios de altos estándares de calidad e higiene, y los mejores productos de grooming y shaving.
Aquí encontrarás ese espacio que hemos perdido los hombres, donde cortarse el pelo y afeitarse se convierten en una terapia de amigos y relajación, más que en un hábito.
Sillas de barbero, espuma, toalla caliente y navaja libre… regresa el ritual del hombre.</p>
            </div> 
            <div class="col-sm-6">
                <h2></h2>

                
                <div>
                 <img class="img-responsive img-thumbnail" src="images/blog/member1.jpg" alt="" /> 

                </div>


            </div> 
        </div> 

        <div class="gap"></div>
        <h1 class="center">Conocé a nuestro equipo</h1>
        <p class="lead center">Meet our high skilled team and also the founder of the company.</p>
        <div class="gap"></div>

        <div id="meet-the-team" class="row" >
 

            <div class="col-md-4 col-xs-6">
                <div class="center">
                    <p><img class="img-responsive img-thumbnail img-circle" src="images/blog/member2.jpg" alt="" /></p>
                    <h5>Julian V. Gomez<small class="designation muted">Especialista en cortes de pelo</small></h5>
                    <p>  </p>
                </div>
            </div>        
            <div class="col-md-4 col-xs-6">
                <div class="center">
                    <p><img class="img-responsive img-thumbnail img-circle" src="images/blog/founder.png" alt="" /></p>
                    <h5>Juan. Alvez<small class="designation muted">Dueño</small></h5>
                    <p> </p>
                </div>
            </div>        
            <div class="col-md-4 col-xs-6">
                <div class="center">
                    <p><img class="img-responsive img-thumbnail img-circle" src="images/blog/member3.jpg" alt="" /></p>
                    <h5>Carlos J. Martinez<small class="designation muted">Estilista de bigotes y barba.</small></h5>
                    <p> </p>
                </div>
            </div>
        </div> 
    </section> 







    

</>
    )
}

export default About
