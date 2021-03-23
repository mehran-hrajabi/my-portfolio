import React from 'react';
import Interest from '../Interest/Interest';
import { faGuitar,faMusic,faTv,faGlobe,faQuestion,faBook,faPlane,faLaptop,faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './_homeInterests.scss';

const HomeInterests = () => {
    return (
        <div className="homeInterests" id="interests">
            <h1>Interests</h1>
            <table>
                <Interest icon={faQuestion}>Learning new skills, especially in web development.</Interest>
                <Interest icon={faGlobe}>Spending spare time on surfing the net for entertainment and to learn new stuff of course.</Interest>
                <Interest icon={faTv}>Watching movies and shows.</Interest>
                <Interest icon={faBook}>Reading books.</Interest>
                <Interest icon={faPlane}>Traveling all around the world and my country.</Interest>
                <Interest icon={faGuitar}>Playing bass. Have been doing it for more than 6 years!</Interest>
                <Interest icon={faMusic}>Playing piano. I'm still a beginner by the way.</Interest>
                <Interest icon={faLaptop}>Coding. That's my job for sure!</Interest>
                <Interest icon={faShareAlt}>Music and sharing it with others! I also have a <a href="https://t.me/enigmatic_chaos">Telegram channel</a> which I share my playlist there. Make sure you check it out!</Interest>
            </table>
        </div>
    );
}

export default HomeInterests;