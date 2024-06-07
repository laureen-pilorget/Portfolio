import React from 'react';
import Banner from './../../components/banner/banner';
import About from './../../components/about/about';
import img from './../../assets/photo_profil.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faServer, faScrewdriverWrench, faTerminal, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import Skills from '../../components/skills/skills';
import CardsBox from './../../components/cards-container/cards-box/cards-box';
import NetworksBox from '../../components/networks-container/networks-box/networks-box';
import './home.scss';

const frontendArray = [
    {
        "text" : "HTML",
        "icon" : <FontAwesomeIcon icon={faHtml5} />
    },
    {
        "text" : "CSS",
        "icon" : <FontAwesomeIcon icon={faCss3Alt} />
    },
    {
        "text" : "JavaScript",
        "icon" : <FontAwesomeIcon icon={faJs} />
    },
    {
        "text" : "React",
        "icon" : <FontAwesomeIcon icon={faReact} />
    },
    {
        "text" : "SASS",
        "icon" : <FontAwesomeIcon icon={faSass} />
    }
]


const backendArray = [
    {
        "text" : "NodeJS",
        "icon" : <FontAwesomeIcon icon={faNode} />
    },
    {
        "text" : "ExpressJS",
        "icon" : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className='icon'>
        <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
        </svg>
    },
    {
        "text" : "Mongo DB",
        "icon" : <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path> </g></svg>
    }
]


const toolsArray = [
    {
        "text" : "VSCode",
        "icon" : <FontAwesomeIcon icon={faTerminal} />
    },
    {
        "text" : "GitHub",
        "icon" : <FontAwesomeIcon icon={faGithub} />
    }
]


const Home = () => {
    return(
        <main className='home'>
            <section className='blank' id='top'></section>
            <section className='home__banner' id='about'>
                <Banner bannerText='Laureen PILORGET - Développeuse web'/>
            </section>
            <section className='home__about'>
                <About aboutImg={img} aboutTitle='Laureen PILORGET' aboutAge='29 ans' aboutText="Après des études en langues étrangères (licence LLCER) et plusieurs années à travailler dans le commerce (différentes enseignes de magasins et immobilier), je décide d'effectuer une reconversion professionnelle dans le domaine de l'informatique. Ayant apprécié le contact clientèle dans mes précédentes activités, j'envisage le métier de product owner qui m'intéresse tout particulièrement. Pour arriver à cette finalité, je pense qu'il est préférable de commencer par du développement. C'est pour cela que j'ai décidé de suivre la formation 'Développeur web' de chez Openclassrooms, qui m'a permis de m'intéresser notamment au front end que j'affectionne tout particulièrement."/>
            </section>
            <section className='home__skills' id='skills'>
                <Banner bannerText='Mes compétences'/>
                <div className='skill'>
                    <div className='skill__frontend'>
                        <p className='skill__frontend__title'>Front-End <FontAwesomeIcon icon={faWindowMaximize} className='titleIcon' /></p>
                        <div className='skill__content__frontend'>
                            {frontendArray.map((data,index) =>(
                                // On récupère le titre et le texte pour chaque collaps
                                <Skills skillsText ={data.text} skillsIcon={data.icon} key={index}/>
                            ))}
                        </div>
                    </div>
                    <div className='skill__backend'>
                        <p className='skill__backend__title'>Back-End <FontAwesomeIcon className='titleIcon' icon={faServer} /></p>
                        <div className='skill__content__backend'>
                            {backendArray.map((data,index) =>(
                                // On récupère le titre et le texte pour chaque collaps
                                <Skills skillsText ={data.text} skillsIcon={data.icon} key={index}/>
                            ))}
                        </div>
                    </div>
                    <div className='skill__tools'>
                        <p className='skill__tools__title'>Tools <FontAwesomeIcon icon={faScrewdriverWrench} className='titleIcon'/></p>
                        <div className='skill__content__tools'>
                            {toolsArray.map((data,index) =>(
                                // On récupère le titre et le texte pour chaque collaps
                                <Skills skillsText ={data.text} skillsIcon={data.icon} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='home__projects' id='projects'>
            <Banner bannerText='Mes projets'/>
            <CardsBox className='home__cardsBox'/>
            </section>
            <section className='home__contact' id='networks'>
                <Banner bannerText={'Contact et réseaux'}/>
                <div className='networkAndContact'>
                    <div className='network'>
                        <p className='network__title'>Retrouvez-moi sur ces plateformes</p>
                        <NetworksBox/>
                    </div>
                    <div className="contact">
                        <p className='contact__title'>N'hésitez pas à me contacter</p>
                        <div className='contact__text'>
                            <p><FontAwesomeIcon icon={faEnvelope} className='icon'/></p>
                            <p className='email'>laureen.pilorget@laposte.net</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home