import React from 'react'
import Team from '../components/Team/Team';
import ContactUs from '../components/ContactUs/ContactUs';
import './About.css';
//import Footer from '../layout/Footer/Footer';

const About = () => {
    return (
        <div>
          <h1 className="text-center mt-3">About Foodie</h1>
          <p className="my-1">
            Foodie is an apllication that helps users search for the favorite food spots in their local
          </p>

         {/* <h1 className="text-center mt-4">Our Team</h1>
          <h4 className="text-center">Meet Our Awesome Team Members</h4>  */}
          <div className="row">
          <Team />
          </div>
          <h1 className="text-center mt-3">Questions? Comments? Contact Us!</h1>
          <div className="contact-form">
          <ContactUs />
          </div>
          {/* <Footer /> */}
        </div>
    )
}

export default About;