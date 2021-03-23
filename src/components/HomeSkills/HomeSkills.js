import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic,faLanguage,faLaptop } from '@fortawesome/free-solid-svg-icons';
import './_homeSkills.scss';

const HomeSkills = () => {
    return (
        <div className="homeSkills" id="skills">
            <h1>Skills</h1>
            <h2><FontAwesomeIcon icon={faLaptop} /> Computer Skills</h2>
            <ul>
                <li>Programming languages: HTML, CSS, JavaScript.</li>
                <li>Technologies and frameworks: jQuery, Bootstrap4, Sass, React.js, Next.js.</li>
                <li>Tools and editors: Visual Studio Code, VMWare Workstation, NPM, Git, Webpack.</li>
                <li>Scientific writing: Microsoft office, LATEX.</li>
            </ul>
            <h2><FontAwesomeIcon icon={faMusic} /> Music Skills</h2>
            <ul>
                <li>Knowledge and instruments: Bass guitar, Piano, Music theory.</li>
                <li>Software and tools: Guitar pro7, Cubase5.</li>
            </ul>
            <h2><FontAwesomeIcon icon={faLanguage} /> Languages</h2>
            <ul>
                <li>English: Advanced</li>
                <li>Persian: Native</li>
            </ul>
        </div>
    );
}

export default HomeSkills;