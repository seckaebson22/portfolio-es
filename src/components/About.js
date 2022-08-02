import React, { useState, useEffect } from "react";
import mainSkills from "./../images/skills.png";
import experience from "./../images/award.jpg";
import Education from "./../images/Education.jpg";
// import classNames from 'classnames';

const tabItems = [
    {
        id: 1,
        title: "main skills",
        logo: mainSkills,
        content: [
            {
                title: "frontend",
                excerpt: "React, Redux , HTML, CSS, SASS, jQuery",
            },
            {
                title: "backend",
                excerpt: "Node.JS, PHP",
            },
            {
                title: "database",
                excerpt: "MySql, MongoDB",
            },
        ],
    },
    {
        id: 2,
        title: "experience",
        logo: experience,
        content: [
            {
                title: "Xanda LTD (xanda.net) 09/2020 - 04/2022",
                excerpt:
                    "I worked as a full stack developer. My responsibilities where primarily focuse on building custom WordPress themes. so I design the frontend with HTML, CSS and JavaScript and make it dyamic with custom PHP in wordPress",
            },
            {
                title: "Ebaaba LTD (ebaaba.com) 02/2020 - 08/2020",
                excerpt:
                    "I did an intern at Ebaaba company ltd, working on their website ebaaba.com fixing buys and adding new features on their website",
            },
        ],
    },
    {
        id: 3,
        title: "education & certification",
        logo: Education,
        content: [
            {
                title: "Bsc. Computer Science (Cum Laude)",
                excerpt: "I completed a undergraduate degree in Computer Science at the University of the Gambia between January 2016 to December 2019",
            },
            {
                title: "West African Examination Counsel",
                excerpt: "Completed a there year Senior Secondary School Certificate at Charles Jaw Senior Secondary School in 2015",
            },
        ],
    },
];

const About = () => {

    const [active, setActive] = useState(0);

    useEffect(() => {
       setActive(1);
    }, []);

    const handleClick = (e) => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    }   

    return (
        <div className="section about" id="about">
            <div className="centering small">
                <div className="grid alt">
                    <div className="grid-xs-12 grid-s-4 grid-md-4">
                        <div className="scale-image">
                            {
                                tabItems.map(({logo, id}) => {
                                    return(
                                        <img className={active === id ? 'is-active' : ''} active={active === id} src={logo} id={id} alt="my logo" />
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    <div className="grid-xs-12 grid-s-8 grid-md-8">
                        <div className="section-content alt">
                            <h2 className="section-title">About me</h2>
                            <div className="section-excerpt">
                                <p>A professional full stack developer.</p>
                            </div>
                        </div>
                        <div class="tabs">
                            <ul class="tabs-nav">
                                {tabItems.map(({ title, id }) => {
                                    return (
                                        <li className={active === id ? 'is-active' : ''} id={id} onClick={handleClick} active={active === id}>
                                            {title}
                                        </li>
                                    );
                                })}
                            </ul>

                            {
                                tabItems.map(({ content, id }) => {
                                    return (
                                        <div className={!(active === id) ? 'tab-content' : 'tab-content is-active'} id={id} active={active === id}>
                                            {
                                                content.map(({ title, excerpt }) => {
                                                    return (
                                                        <div className="tab-container">
                                                            <h4 className="tab-title">{title}</h4>
                                                            <div className="tab-excerpt">
                                                                <p>{excerpt}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    )
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
