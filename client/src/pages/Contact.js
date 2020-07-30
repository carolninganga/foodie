import React from 'react';
// import Team from '../layout/Team/Team';
// import ReactContactForm from 'react-mail-form';
// import Footer from '../layout/Footer/Footer';
import './Contact.css';
import Caroline from './Caroline.jpeg';


const About = () => {
  return (
    <div>
      <div className="about-bin">
        <h1>About Foodie</h1>
        <hr />
        <p className="my-1">
          This is a Full Stack Application that allows the user to save and delete their favorite local food spots.
          {' '}
        </p>
        <p className="bg-dark p">
          <strong>Version: </strong> 1.0.0
        </p>
      </div>
      <div className="bio-bin">
        <div className="row">
          <div className="col-4">
            <img className="bio-img" src={Caroline} />
            <h2 class="animate__animated animate__bounce">Caroline</h2>
            <p>
              Caroline is a rockstar full-stack web developer and passionate about restaurant hosted in New York City.
            </p>
            <div className="buttongit center">
            <button className="btnb"><a href="https://github.com/carolninganga">github<i class="fab fa-github"></i> </a>
            </button>
            </div>
          </div>
          <div className="col-4">
            {/* <img className="bio-img" src={} /> */}
            <h2>Pheobe</h2>
            <p>Pheobe is a full-stack web developer and refactoring wiz.</p>
            <div className="buttongit center">
            <button className="btnb"><a href="https://github.com/PhoebeYahengWu">github<i class="fab fa-github"></i> </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

