import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: true
}

const qualification = [
    'Frontend Developer',
    'Backend Developer',
    'WordPress Developer',
    'MERN Stack Developer'
]


const Carousel = () => {
    return (
        <Flickity
            className={'slideshow'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            reloadOnUpdate // default false
            static // default false
        >
            {
                qualification.map((data) => {
                    return (
                        <h1 className='slideshow-slide'>
                            {data}
                        </h1>
                    )
                })
            }

        </Flickity>
    )
}

export default Carousel