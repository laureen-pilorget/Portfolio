import React from 'react';
import Banner from './../../components/banner/banner';
import About from './../../components/about/about'
import img from './../../assets/photo_profil.jpeg';
import CardsBox from './../../components/cards-container/cards-box/cards-box';
import './home.scss';

// import Home from './home/home';


const Home = () => {
    return(
        <main className='home'>
            <section className='home__banner'>
                <Banner bannerText='Laureen PILORGET - Développeuse web'/>
            </section>
            <section className='home__about'>
                <About aboutImg={img} aboutTitle='Laureen PILORGET' aboutAge='29 ans' aboutText='Lorem ipsum dolor sit amet. Qui fugiat ipsa et nihil galisum qui enim quae sit provident eligendi ut inventore placeat non nihil omnis. Id maxime dolorem et recusandae nulla qui provident saepe non sint voluptatem hic atque delectus. Vel nostrum enim est aliquam eveniet sed repudiandae rerum et magni distinctio ut expedita quam quo omnis nulla in totam incidunt. In error voluptatem et maiores asperiores est consequatur libero est voluptate atque est aperiam aperiam! Ut soluta unde ad sequi atque et architecto laborum. Et omnis ratione sit vitae quos sit enim voluptatibus. Ad Quis deserunt sed quidem illum At itaque nesciunt?'/>
            </section>
            {/* <section className='home__cardsBox'>
                <CardsBox />
            </section> */}
        </main>
    )
}

export default Home