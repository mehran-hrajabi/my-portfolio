import React from 'react';
import {Link} from 'react-scroll';
import About from '../../components/HomeAbout/HomeAbout';
import Education from '../../components/HomeEducation/HomeEducation';
import Experience from '../../components/HomeExperience/HomeExperience';
import Skills from '../../components/HomeSkills/HomeSkills';
import Interests from '../../components/HomeInterests/HomeInterests';
import Pic from '../../assets/img/profile.jpg';
import './_home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="home-nav">
                <div>
                    <img src={Pic} alt="Profile picture" />
                    <Link to="about" activeClass="active" spy={true} smooth={true} duration={1000}>About</Link>
                    <Link to="education" activeClass="active" spy={true} smooth={true} duration={1000}>Education</Link>
                    <Link to="experience" activeClass="active" spy={true} smooth={true} duration={1000}>Experience</Link>
                    <Link to="skills" activeClass="active" spy={true} smooth={true} duration={1000}>Skills</Link>
                    <Link to="interests" activeClass="active" spy={true} smooth={true} duration={1000}>Interests</Link>   
                    <hr /> 
                    <a href="/#/contact">Contact</a>            
                </div>
            </div>
            <div className="home-container">
                <About />
                <Education />
                <Experience />
                <Skills />
                <Interests />
            </div>
        </div>
    );
}

export default Home;