import React from 'react'
import beardShave from '../../../assets/beard_shave.jpg'
import hair_cut from '../../../assets/hair_cut.jpg'
import pic3 from '../../../assets/pic3.jpg'
import logo from '../../../assets/logo.png'
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";



import './Services.css'

const Services = () => {
    return (
        <div className='services' id='what-we-do'>

            <div className='services-container'>

                <div className='services-info'>
                    <img src={logo} alt=''></img>
                    <h1>Servicios</h1>
                    <p className='mr-bottom services-para'> Combinamos lo mejor de la barbería tradicional con texturizados, volúmenes y tendencias modernas. La old schooles moda (ahora y siempre) y</p>
                    <p className='mr-bottom services-para'> vos también podés tener una imagen moderna y actual. Solo tienes que dar el paso.</p>
                </div>

                <div className='services-grid'>
                    <div className='services-box'>
                        <img src={hair_cut} alt=''></img>
                        <h2>Cortes</h2>
                        <p className='mr-bottom services-para'>Clásico o moderno.</p>
                        <p className='mr-bottom services-para'>Marcamos tendencia combinando máquinas y tijeras.</p>
                    </div>
                    <div className='services-box'>
                        <img src={beardShave} alt=''></img>
                        <h2>Barba</h2>
                        <p className='mr-bottom services-para'>Afeitada tradicional o recorte de barba.</p>
                        <p className='mr-bottom services-para'>Contamos con el servicio de toalla caliente..</p>
                    </div>
                  
                    <div className='services-box'>
                        <img src={pic3} alt=''></img>
                        <h2>Afeitados</h2>
                        <p className='mr-bottom services-para'>afeitado perfecto y diseño de barbas</p>
                        <p className='mr-bottom services-para'>velit esse cillum dolore fugiat nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
