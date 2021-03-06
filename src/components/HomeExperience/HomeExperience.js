import React from 'react';
import './_homeExperience.scss';

const HomeExperience = () => {
    return (
        <div className="homeExperience" id="experience">
            <h1>Work Experience</h1>
            <div className="homeExperience-item">
                <h2>Front-End Developer Intern</h2>
                <h3>NahiraTech</h3>
                <span>Oct. 2020 - Feb. 2021</span>
                <ul>
                    <li>Completed different online courses related to web development and its technologies.</li>
                    <li>Worked on several test projects and tasks.</li>
                    <li>Worked on a backgammon game project as a part of the scrum development team.</li>
                </ul>
            </div>
            <div className="homeExperience-item">
                <h2>Musician / Bass Player</h2>
                <h3>Karabiner 98</h3>
                <span>2020 - Present</span>
                <ul>
                    <li>Currently working on debut album.</li>
                </ul>
                <h3>The turtles</h3>
                <span>2017 - Present</span>
                <ul>
                    <li>First live performance: 2018 Saba Festival at Sharif University Central Amphitheater.</li>
                    <li>Second live performance: 2019 Saba Festival at Sharif University Central Amphitheater.</li>
                    <li>On hiatus after COVID-19 pandemic.</li>
                </ul>
            </div>            
        </div>
    );
}

export default HomeExperience;