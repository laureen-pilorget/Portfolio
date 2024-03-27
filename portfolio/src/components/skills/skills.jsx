import React from "react";
import './skills.scss';

const Skills = ({skillsIcon, skillsText}) => {
    return(
        <div className="skills">
            <div className="skills__icon">{skillsIcon}</div>
            <p className="skills__text">{skillsText}</p>
        </div>
    )
}

export default Skills