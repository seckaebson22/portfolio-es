import React, {useState} from "react";
import logo from "./../images/logo.jpg";
// import classNames from 'classnames';

const tabItems = [
    {
        id: 1,
        title: "main skills",
        content: [
            {
                title: "frontend",
                excerpt: "React, Redux, PWA, Service Worker, HTML, CSS.",
            },
            {
                title: "backend",
                excerpt: "Node.JS, Express,Babel, ESLint",
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
        content: [
            {
                title: "Zoho Technologies 2019 - Present",
                excerpt:
                    "Working as a React Developer at Zoho Technologies. Responsible for developing Frontend SPA (Single Page Applications) with performance in mind. Developed some ESLint and Babel Plugins. Did code reviews on performance perspectives.",
            },
            {
                title: "Zoho Technologies 2019 - Present",
                excerpt:
                    "Working as a React Developer at Zoho Technologies. Responsible for developing Frontend SPA (Single Page Applications) with performance in mind. Developed some ESLint and Babel Plugins. Did code reviews on performance perspectives.",
            },
        ],
    },
    {
        id: 3,
        title: "education & certification",
        content: [
            {
                title: "B.Tech Information Technology 73%",
                excerpt: "PSNA CET, Anna University",
            },
            {
                title: "Higher secondary 87.1%",
                excerpt: "SBOA Mat Hr Sec School",
            },
        ],
    },
];

const About = () => {

    const [active, setActive] = useState(false);

    return (
        <div className="section about">
            <div className="centering small">
                <div className="grid alt">
                    <div className="grid-xs-12 grid-s-4 grid-md-4">
                        <div className="scale-image">
                            <img src={logo} alt="my logo" />
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
                                {tabItems.map(({ title, id}) => {
                                    return (
                                        <li className={active ? ' ' : 'is-active'} key={id} htmlFor={`active-${title}`} onItemClicked={() => setActive(id)} isActive={id === active}>
                                            {title}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className={!active ? 'tab-content' : 'is-active'}>
                                {
                                    tabItems.map(({ content, id }) => {
                                        return (
                                            <div key={id} onClick={active}>
                                                {
                                                    content.map(({ title, excerpt }) => {
                                                        return (
                                                            <>
                                                                <h4 className="tab-title">{title}</h4>
                                                                <div className="tab-excerpt">
                                                                    <p>{excerpt}</p>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            
                                        )
                                    })

                                }

                            </div>
                        </div>
                        {/* <div class="tabs">
                            <ul class="tabs-nav">
                                <li><a href="#tab-1" class="tabs-link is-active">main skills</a></li>
                                <li><a href="#tab-2" class="tabs-link">Experiance</a></li>
                                <li><a href="#tab-3" class="tabs-link">Education &amp; certification</a></li>
                            </ul>

                            <div id="tab-1" class="tab-content is-active">
                                <p>Tab 1 content goes here...</p>
                            </div>
                            <div id="tab-2" class="tab-content">
                                <p>Tab 2 content goes here...</p>
                            </div>
                            <div id="tab-3" class="tab-content">
                                <p>Tab 3 content goes here...</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
