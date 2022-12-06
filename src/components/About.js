import React, { useState, useEffect } from "react";
// import mainSkills from "./../images/skills.png";
// import mainSkills from "./../images/icons/coding.svg";
// import experience from "./../images/award.jpg";
// import experience from "./../images/icons/briefcase.svg";
// import Education from "./../images/Education.jpg";
// import Education from "./../images/icons/cap-graduation-hat-svgrepo-com.svg";
// import JarvisesCertificate from './../images/jarvises.pdf';
// import classNames from 'classnames';

const tabItems = [
    {
        id: 1,
        title: "main skills",
        // logo: mainSkills,
        logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>,
        content: [
            {
                title: "Frontend",
                excerpt: "React, Redux, HTML, CSS, SASS, jQuery",
            },
            {
                title: "Backend",
                excerpt: "PHP(Laravel/Lumen)",
            },
            {
                title: "Database",
                excerpt: "MySql, MongoDB",
            },
        ],
    },
    {
        id: 2,
        title: "experience",
        logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>,
        content: [
            {
                title: "The Web Way (thewebway.info) 08/2022 - 10/2022",
                excerpt:
                    "I worked as a software developer on contract, I implemented website updates for there clients. I also contributed in the development of web applications for there clients",
            },
            {
                title: "Xanda LTD (xanda.net) 09/2020 - 04/2022",
                excerpt:
                    "I worked as a full stack developer. My responsibilities where primarily focused on building custom WordPress themes. The programming tools I use there includes but are not limited  to HTML, CSS, JavaScript(Jquery) and Other JavaScript libraries",
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
        logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>,
        content: [
            {
                title: "Bsc. Computer Science (Cum Laude)",
                excerpt: "I completed a undergraduate degree in Computer Science at the University of the Gambia between January 2016 to December 2019",
            },
            // {
            //     title: "Certificate on Organisational Behaviour",
            //     excerpt: "Completed a summer course on Organisational Behaviour at Jarvis Christian University",
            //     link: JarvisesCertificate,
            // },
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
        <section className="section about" id="about">
            <div className="centering small">
                <div className="grid alt">
                    <div className="grid-xs-12 grid-s-4 grid-md-4">
                        {/* <div className="scale-image">
                            {
                                tabItems.map(({ logo, id }) => {
                                    return (
                                        // <img className={active === id ? 'is-active' : ''} active={active === id} src={logo} id={id} alt="my logo" />
                                        <div className={active === id ? 'is-active' : ''} active={active === id} id={id}>
                                            {logo}
                                        </div>
                                    )
                                })
                            }

                        </div> */}
                        {
                            tabItems.map(({ logo, id }) => {
                                return (
                                    <div className={active === id ? 'tabs-logo is-active' : 'tabs-logo'} active={active === id} id={id}>
                                        {logo}
                                    </div>
                                )
                            })
                        }
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
                                                content.map(({ title, excerpt, link }) => {
                                                    return (
                                                        <div className="tab-container">
                                                            <h4 className="tab-title">{title}</h4>
                                                            <div className="tab-excerpt">
                                                                <p>{excerpt} {title === 'Certificate on Organisational Behaviour' && (
                                                                    <a class="button-view" href={link} target="_blank">. Click to View Certificate</a>
                                                                )}</p>

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
        </section>
    );
};

export default About;
