import React from 'react';
import Icon from "../UI/Icon/Icon";
import { faTwitter, faInstagram, faTelegram, faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './_homeAbout.scss';

const HomeAbout = () => {
    return (
        <div className="homeAbout" id="about">
            <div className="homeAbout-header">
                <h1>MEHRAN HAJIRAJABI</h1>
                <h3>
                    <a href="mailto:mehran.hrajabi@gmail.com" target="_blank">MEHRAN.HRAJABI98@GMAIL.COM</a> / 
                    <a href="mailto:mehran.hajirajabi@tic.sharif.edu" target="_blank"> MEHRAN.HAJIRAJABI@TIC.SHARIF.EDU</a>
                </h3>
            </div>
            <div className="homeAbout-body">
                <p>I received my Bachelor of Science Degree in Computer Engineering at the
                    <a href="http://ce.sharif.edu/" target="_blank"> Department of Computer Engineering</a>,
                    <a href="http://www.en.sharif.edu/" target="_blank"> Sharif University of Technology</a>, Tehran, Iran.
                </p>      
                <p>I'm also working as a Front-End Developer at 
                    <a href="https://ishaya.ir/" target="_blank"> Shaya Smart Solutions</a>.
                </p>          
            </div>
            <div>
                <p>You can find me on social media:</p>
                <Icon link="https://twitter.com/MehranHrj" style="twitter" icon={faTwitter} />
                <Icon link="https://www.instagram.com/mehran_hrajabi/" style="instagram" icon={faInstagram} />
                <Icon link="https://t.me/Mehran_hrajabi" style="telegram" icon={faTelegram} />
                <Icon link="https://linkedin.com/in/mehran-hrajabi" style="linkedin" icon={faLinkedin} />

                <p>If you like my work, you can visit my gitlab and github page:</p>
                <Icon link="https://github.com/mehran-hrajabi" style="github" icon={faGithub} />
                <Icon link="https://gitlab.com/mehran-hrajabi" style="gitlab" icon={faGitlab} />
            </div>
        </div>            
    );
}

export default HomeAbout;