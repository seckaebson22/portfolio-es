import React from 'react'
import logo from "./../images/seckaby.jpeg";
import Carousel from './Carousel';

const Hero = () => {
    return (
        <section className="section hero" id='home'>
            <div className="centering small">
                <div className="grid alt">
                    <div className="grid-xs-12 grid-s-4 grid-md-4">
                        <div className="scale-image">
                            <img src={logo} alt="my logo" />
                        </div>
                    </div>
                    <div className="grid-xs-12 grid-s-8 grid-md-8">
                        <div className="section-content alt">
                            <h3 className="hero-subtitle">welcome to my world</h3>
                            <h1 className='hero-title'>Hi, i'm Ebrima Secka</h1>
                            <Carousel />
                            <h2>based in Gambia</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero