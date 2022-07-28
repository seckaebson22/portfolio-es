import React from 'react'
import logo from './../images/github-npm.png';

const Projects = () => {
    return (
        <div className='section'>
            <div className='centering small'>
                <div className='section-content'>
                    <h2 className='section-title'>my latest projects</h2>
                    <div className='section-excerpt'>
                        <p>There are some open source projects in Active development too. These are some stable projects published.</p>
                    </div>
                </div>
                <div className='grid'>
                    <div className='grid-xs-12 grid-s-6 grid-m-4 grid-md-4'>
                        <div className='item'>
                            <a href='#home' className='item-image scale-image'>
                                <img src={logo} alt="Logo" />
                            </a>
                            <div className='item-content'>
                                <h4 className='item-subtitle'>portfolio webdev</h4>
                                <h3 className='item-title'>A minimalistic web portfolio for all devs</h3>
                                <a href='#home' className='button item-button'>view repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='grid-xs-12  grid-s-6 grid-m-4 grid-md-4'>
                        <div className='item'>
                            <a href='#home' className='item-image scale-image'>
                                <img src={logo} alt="Logo" />
                            </a>
                            <div className='item-content'>
                                <h4 className='item-subtitle'>portfolio webdev</h4>
                                <h3 className='item-title'>A minimalistic web portfolio for all devs</h3>
                                <a href='#home' className='button item-button'>view repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='grid-xs-12  grid-s-6 grid-m-4 grid-md-4'>
                        <div className='item'>
                            <a href='#home' className='item-image scale-image'>
                                <img src={logo} alt="Logo" />
                            </a>
                            <div className='item-content'>
                                <h4 className='item-subtitle'>portfolio webdev</h4>
                                <h3 className='item-title'>A minimalistic web portfolio for all devs</h3>
                                <a href='#home' className='button item-button'>view repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='grid-xs-12  grid-s-6 grid-m-4 grid-md-4'>
                        <div className='item'>
                            <a href='#home' className='item-image scale-image'>
                                <img src={logo} alt="Logo" />
                            </a>
                            <div className='item-content'>
                                <h4 className='item-subtitle'>portfolio webdev</h4>
                                <h3 className='item-title'>A minimalistic web portfolio for all devs</h3>
                                <a href='#home' className='button item-button'>view repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='grid-xs-12  grid-s-6 grid-m-4 grid-md-4'>
                        <div className='item'>
                            <a href='#home' className='item-image scale-image'>
                                <img src={logo} alt="Logo" />
                            </a>
                            <div className='item-content'>
                                <h4 className='item-subtitle'>portfolio webdev</h4>
                                <h3 className='item-title'>A minimalistic web portfolio for all devs</h3>
                                <a href='#home' className='button item-button'>view repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='grid-xs-12 grid-s-6 grid-m-4 grid-md-4'>
                        <div className='item'>
                            <a href='#home' className='item-image scale-image'>
                                <img src={logo} alt="Logo" />
                            </a>
                            <div className='item-content'>
                                <h4 className='item-subtitle'>portfolio webdev</h4>
                                <h3 className='item-title'>A minimalistic web portfolio for all devs</h3>
                                <a href='#home' className='button item-button'>view repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-button'>
                    <a href='#home' className='button button-secondary'>view more</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;