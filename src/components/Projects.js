import React from 'react'
import logo1 from './../images/cv-uk.png';
import logo2 from './../images/link-britannia.png';
import logo3 from './../images/fresh-and-funky.jpg';
import logo4 from './../images/shady-tints.png';
import logo5 from './../images/the-baae-company.png';
import logo6 from './../images/ebaaba-vendor-dashboard.png';

const itemData = [
    {
        id: 1,
        img: logo1,
        // item_subtitle: 'my latest projects',
        // item_title: 'A minimalistic web portfolio for all devs1',
        link: 'http://cvuk.hostings.co.uk/'
    },
    {
        id: 2,
        img: logo2,
        // item_subtitle: 'my latest projects',
        // item_title: 'A minimalistic web portfolio for all devs2',
        link: 'http://link-britannia.hostings.co.uk/'
    },
    {
        id: 3,
        img: logo3,
        // item_subtitle: 'my latest projects',
        // item_title: 'A minimalistic web portfolio for all devs3',
        link: 'https://fresh-and-funky.hostings.co.uk/'
    },
    {
        id: 4,
        img: logo4,
        // item_subtitle: 'my latest projects',
        // item_title: 'A minimalistic web portfolio for all devs4',
        link: 'http://shady-tints.hostings.co.uk/'
    },
    {
        id: 5,
        img: logo5,
        // item_subtitle: 'my latest projects',
        // item_title: 'A minimalistic web portfolio for all devs5',
        link: 'https://thebaaecompanyltd.com/'
    },
    {
        id: 6,
        img: logo6,
        item_subtitle: 'Ebaaba Vendor dashboard',
        item_title: 'A vendor dashoard build with react and lumen/laravel',
        link: 'https://github.com/'
    }


]

const Projects = () => {
    return (
        <section className='section' id='portfolio'>
            <div className='centering small'>
                <div className='section-content'>
                    <h2 className='section-title'>my latest projects</h2>
                    <div className='section-excerpt'>
                        <p>There are some open source projects in Active development too. These are some stable projects published.</p>
                    </div>
                </div>
                <div className='grid'>
                    {
                        itemData.map(({ id, img, item_subtitle, item_title, link}) => {
                            return (
                                <div className='grid-xs-12 grid-sm-6 grid-s-6 grid-m-4 grid-md-4' id={id}>
                                    <div className='item'>
                                        <a href={link} className='item-image scale-image'>
                                            <img src={img} alt="Logo" />
                                        </a>
                                        <div className='item-content'>
                                            <h4 className='item-subtitle'>{item_subtitle}</h4>
                                            <h3 className='item-title'>{item_title}</h3>
                                            <a href={link} className='button item-button'>view project</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='section-button'>
                    <a href='https://github.com/' className='button button-secondary'>view more</a>
                </div>
            </div>
        </section>
    )
}

export default Projects;