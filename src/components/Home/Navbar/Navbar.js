import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
//import './Navbar.css'
import {time, fullTime} from '../../../time'
import {checkCookie, getCookie, deleteCookie} from '../../../cookies'
//import SideNav from '../../SideNav/SideNav'                                 



const Navbar = () => {
    const [day, setDay] = useState('sun')
    const [workTime, setWorkTime] = useState('')
    const [name, setName] = useState('user')
    
    useEffect(()=>{
        
        let loginAndReg = document.querySelector('.login-reg-links')
        let helloUser = document.querySelector('.user-loggedIn')
        let controlPanel = document.querySelector('.cp')
        let userProfile = document.querySelector('.up')

        let {day} = time()
        console.log(day)
        dayOfWeek(day)
        setName(getCookie('name'))
        if(getCookie('admin') === 'true'){
            controlPanel.style.display = 'block'
            userProfile.style.display = 'none'

        }
        // else{
        //     controlPanel.style.display = 'none'
        //     userProfile.style.display = 'block'
        // }
 
        if(checkCookie('status')){
            helloUser.style.display = 'flex'
            loginAndReg.style.display = 'none'
            
        }
        // else{
        //     helloUser.style.display = 'none'
        //     loginAndReg.style.display = 'flex'
        //     userProfile.style.display = 'none'
        // }
    },[])

    const logout = () =>{
        console.log('user logout')
        deleteCookie('name')
        deleteCookie('id')
        deleteCookie('status')
        deleteCookie('admin')
        window.location.replace('/')
    }

    const toggleSideNav = () =>{
        let sideNavbar = document.querySelector('.side-navbar')
        let humburger = document.querySelectorAll('.line')
        sideNavbar.classList.toggle('side-navbar-avtive')

        humburger.forEach((line)=>{
            line.classList.toggle('humburger-active')
        })
    }

    const dayOfWeek = (num) =>{
        let obj = fullTime(num)
        setDay(obj.day)
        setWorkTime(obj.workTime)
    }

    return (


        <header class="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <Link  to='/'>
                     <img src="images/mustachelogo.png" alt="logo"/>
                </Link>             
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active">
                        <Link  to='/'>
                            Home
                        </Link>
                    </li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li>
                      <Link className='links login-link disappear' to='/login'>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className='links disappear' to='/register'>
                          Registrarse
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>







        

    )

}

export default Navbar
