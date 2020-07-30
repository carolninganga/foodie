import React from 'react';
import Team from '../components/Team/Team';
import ContactUs from '../components/ContactUs/ContactUs';

const About = () => {
    return (
        <div>
          <div className="row">
          <Team />
          </div>
          <div className="row">
          <ContactUs />
          </div>
        </div>
    )
}

export default About;