import React from 'react';
import Presentation from './../../components/presentation/presentation';
// import Banner from './../../components/banner/banner';
import CardsBox from './../../components/cards-container/cards-box/cards-box';
// import bannerImg from './../../assets/img-banniere.png';
import './home.scss';

// import Home from './home/home';


const Home = () => {
    return(
        <main className='mainHome'>
            <section className='home__banner'>
                {/* <Presentation /> */}
            </section>
            {/* <section className='home__cardsBox'>
                <CardsBox />
            </section> */}
        </main>
    )
}

export default Home