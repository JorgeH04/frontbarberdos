import React from 'react'
//import './Hero.css'
import { Link } from 'react-router-dom'
 

const Contact = () => {
    return (


       <>

        <section id="title" class="lampcontactus" >
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h1>Contact Us</h1>
                    <p>We The Alcomtisers Cutters are always here. Feel free to message us.</p>
                </div>
                <div class="col-sm-6">
                    <ul class="breadcrumb pull-right">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </section> 

    <section id="contact-page" class="container">
        <div class="row">
            <div class="col-sm-8">
                <h4>Contact Form</h4>
                <div class="status alert alert-success" ></div>
                <form id="main-contact-form" class="contact-form" name="contact-form" method="post" action="sendemail.php" role="form">
                    <div class="row">
                        <div class="col-sm-5">
                            <div class="form-group">
                                <input type="text" class="form-control" required="required" placeholder="First Name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" required="required" placeholder="Last Name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" required="required" placeholder="Email address"/>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Message"></textarea>
                        </div>
                    </div>
                </form>
            </div> 
            <div class="col-sm-4">
                <h4>Our Location</h4>
<iframe src="https://www.google.com/maps/d/embed?mid=1m-6fVZc7bkPW8tGkcMON6EFPZD4&hl=en_US" width="400" height="300"></iframe>
            </div> 
        </div>
    </section> 
 


 
       </>

    )
}

export default Contact
