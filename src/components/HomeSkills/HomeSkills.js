import React from 'react';
import './_homeSkills.scss';

const HomeSkills = () => {
    return (
        <div className="homeSkills" id="skills">
            <h1>Skills</h1>
            <h2>Computer Skills</h2>
            <ul>
                <li>
                    Programming languages: HTML, CSS, JavaScript.
                </li>
                <li>
                    Technologies and frameworks: jQuery, Bootstrap4, Sass, React.js, Next.js.
                </li>
                <li>
                    Tools and editors: Visual Studio Code, VMWare Workstation, NPM, Git.
                </li>
                <li>
                    Scientific writing: Microsoft office, LATEX.
                </li>
            </ul>
            <h2>Music Skills</h2>
            <ul>
                <li>
                    Knowledge and instruments: Bass guitar, Piano, Music theory.
                </li>
                <li>
                    Software and tools: Guitar pro7, Cubase5.
                </li>
            </ul>
            <h2>Languages</h2>
            <ul>
                <li>
                    English: Advanced
                </li>
                <li>
                    Persian: Advanced
                </li>
            </ul>
        </div>
    );
}

export default HomeSkills;