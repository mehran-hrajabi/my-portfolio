import React from 'react';
import Record from '../Record/Record';
import './_homeExperience.scss';

const HomeExperience = () => {
    return (
        <div className="homeExperience" id="experience">
            <h1>Work Experience</h1>

            <div className="homeExperience-item">
                <h2>Front-End Developer</h2>
                <Record link="https://ishaya.ir/" title="Shaya Smart Solutions - Full Time" date="March. 2021 - Present" />
                
                <Record link="https://www.nahiratech.com/" title="NahiraTech - Internship" date="Oct. 2020 - Feb. 2021">
                    <ul>
                        <li>Completed different online courses related to web development and its technologies.</li>
                        <li>Worked on several test projects and tasks.</li>
                        <li>Worked on a backgammon game project as a part of the scrum development team.</li>
                    </ul>                    
                </Record>
            </div>

            <div className="homeExperience-item">
                <h2>Musician / Bass Player</h2>
                <Record link="" title="Karabiner 98" date="2020 - Present">
                    <ul>
                        <li>Currently working on debut album.</li>
                    </ul>                    
                </Record>

                <Record link="" title="The turtles" date="2017 - Present">
                    <ul>
                        <li>First live performance: 2018 Saba Festival at Sharif University Central Amphitheater.</li>
                        <li>Second live performance: 2019 Saba Festival at Sharif University Central Amphitheater.</li>
                        <li>On hiatus after COVID-19 pandemic.</li>
                    </ul>                 
                </Record>
            </div>            
        </div>
    );
}

export default HomeExperience;