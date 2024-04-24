import React from "react";
import Networks from "../networks/networks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './networks-box.scss';
import { Link } from "react-router-dom";

const networksArray = [
    {
        "id" : "1",
        "icon" : <FontAwesomeIcon icon={faGithub} />,
        "text" : "GitHub",
        "link" : "https://github.com/laureen-pilorget?tab=repositories"
    },
    {
        "id" : "2",
        "icon" : <FontAwesomeIcon icon={faLinkedin} />,
        "text" : "LinkedIn",
        "link" : "https://www.linkedin.com/in/laureen-pilorget-22b96814a/"
    }
]



const NetworksBox = () => {
    return(
        <div className='networks'>
            {/* On parcourt le tableau créé précédemment */}
            {networksArray.map((data,index) =>(
                <Link className="link" key={data.id} to={`${data.link}`}>
                    {/* On récupère le titre et le texte pour chaque collaps */}
                    <Networks networksIcon ={data.icon} networksText={data.text} key={index}/>
                </Link>
            ))}
        </div>
    )
}
export default NetworksBox