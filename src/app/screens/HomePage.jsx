import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap'
import WOW from 'wowjs'; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from "react-i18next";

function HomePage() {
    const { t } = useTranslation();

    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset || document.documentElement.scrollTop;

        if (position > 2000) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    };

    
    React.useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header type="Home" />
            

            <div className="OurExpertise">
                <Container >
                    <Row>
                        <Col md={12} className='text-center'>
                            <h2 className='Title wow fadeInUp' data-wow-delay="0.2s"><span>{t("Our Expertise")}</span> {t("x-factor across Industries worldwide")}</h2>

                            <h5 className='wow fadeInUp' data-wow-delay="0.5s">{t("Embrace Our Expert Solutions")}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ul>
                                <li className='wow zoomIn' data-wow-delay="0.6s">{t("FINANCE")}</li>
                                <li className='wow zoomIn' data-wow-delay="0.7s">B2B</li>
                                <li className='wow zoomIn' data-wow-delay="0.8s">{t("Online TRADING")}</li>
                                <li className='wow zoomIn' data-wow-delay="0.9s">{t("SOCIAL NETWORK")}</li>
                                <li className='wow zoomIn' data-wow-delay="1.0s">{t("enterprises")}</li>
                                <li className='wow zoomIn' data-wow-delay="1.1s">{t("ED-TECH")}</li>
                                <li className='wow zoomIn' data-wow-delay="1.2s">{t("E-COMMERCE")}</li>
                                <li className='wow zoomIn' data-wow-delay="1.3s">{t("Health-tech")} </li>
                                <li className='wow zoomIn' data-wow-delay="1.4s">{t("Tourism")}</li>
                                <li className='wow zoomIn' data-wow-delay="1.5s">{t("Gaming")}</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ProgressWrap ">
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <img src="images/001.png" alt="Finger" className='wow zoomIn' data-wow-duration="1.0s" />

                            <div className="ProgressTitle">
                                <img src="images/002.png" alt="ProgressTitle" /> <br />

                                <a href="#" className='c-button fillBtn Green'>{t("Get Started")}</a>
                            </div>

                            <div className="ProgressContent">
                                <ul>
                                    <li className='one wow zoomInUp' data-wow-delay="0.4s">
                                        <span>{t("Accelerate Global Reach")}</span>
                                    </li>
                                    <li className='two wow zoomInRight' data-wow-delay="0.5s">
                                        <span className=''>{t("Empowering AI at Your Fingertips")}</span>
                                    </li>
                                    <li className='three wow zoomInLeft' data-wow-delay="0.5s">
                                        <span>{t("Embrace the Future of Decentralisation")}</span>
                                    </li>
                                    <li className='four wow zoomInRight' data-wow-delay="0.7s">
                                        <span>{t("Bridging Innovation to Implementation")}</span>
                                    </li>
                                    <li className='five wow zoomInLeft' data-wow-delay="0.7s">
                                        <span>{t("Amplifying Your Digital Presence")}</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ServiceWrap">
                <Container>
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <div className="ServiceDropWrap">
                                <div className="gradientBubble big">
                                    <h4>{t("Blockchain")} <br />+ <br /> {t("Web3")}</h4>
                                </div>
                                <div className="gradientBubble small">
                                    <h4>AR & VR</h4>
                                </div>
                                <div className="gradientBubble bigger">
                                    <h4>Web <br />{t("Development")}</h4>
                                </div>
                                <div className="gradientBubble small">
                                    <h4>SaaS</h4>
                                </div>
                                <div className="gradientBubble big">
                                    <h4>App <br />{t("Development")}</h4>
                                </div>
                                <div className="gradientBubble">
                                    <h4>AI & ML</h4>
                                </div>
                                <div className="gradientBubble">
                                    <h4>{t("Metaverse")}</h4>
                                </div>
                                <div className="gradientBubble small">
                                    <h4>{t("IoT")}</h4>
                                </div>
                                <div className="gradientBubble small">
                                    <h4>{t("Dev Ops")}</h4>
                                </div>
                                <div className="gradientBubble small">
                                    <h4>{t("Fintech")}</h4>
                                </div>
                                <div className="gradientBubble big">
                                    <h4>{t("E-commerce")}</h4>
                                </div>
                                <div className="gradientBubble">
                                    <h4>UI/UX <br /> {t("Design")}</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="DevelopmentProcess animated">
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <h2 className='Title text-white wow fadeIn'><span>{t("Development")} </span> {t("process")}</h2>
                        </Col>
                    </Row>
                    <Row className='home-payments__globe-line'>
                        <Col md={12} className='text-center'>
                            <div className="wpb_wrapper">

                                <img className='earth' src="images/globe-poster.png" alt="Earth" />

                                <div className="ProcessTitle">
                                    <h3>{t("Power up Business")} <br /> {t("Growth")}</h3>
                                </div>

                                {isInView && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="748.6" height="883" viewBox="0 0 748.6 883">
                                        <path className="half-circle-left" d="M375 54a75 75 50 1 0 .5 736" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                        <path className="half-circle-right" d="M373 54a75 75 50 1 1 .5 736" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                        <path className="top-line" d="M375 0, L375 61" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                        <path className="bottom-line" d="M375 783, L375 883" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                    </svg>
                                )}
                            </div>

                            <div className="ProcessWrap">
                                <div className="BlockContent">
                                    <div className="ProccessContent left"></div>
                                    <div className="ProccessContent right">

                                        <h3 className='wow fadeInRight' data-wow-duration="0.5s">{t("Product Analyst & Design")}</h3>

                                        <p className='wow fadeInRight' data-wow-duration="0.5s">{t("Our team of experts diligently analyzes your product, assembling a detailed roadmap that encompasses every specification and detail of your vision.")}</p>

                                    </div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent left">
                                        <h3 className='wow fadeInLeft' data-wow-duration="0.5s">{t("Development")}</h3>

                                        <p className='wow fadeInLeft' data-wow-duration="0.5s">{t("We work hand in hand with your business department to architect and develop software solutions collaboratively delivering product updates through agile iterations.")}</p>
                                    </div>
                                    <div className="ProccessContent right"></div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent left"></div>
                                    <div className="ProccessContent right">
                                        <h3 className='wow fadeInRight' data-wow-duration="0.5s">{t("Testing & Bug Fixing")}</h3>

                                        <p className='wow fadeInRight' data-wow-duration="0.5s">{t("We strongly believe in the importance of thorough testing to ensure a top-notch product, and thus we employ both automated and manual testing methods aiming to quickly identify and fix any bugs that may affect the quality.")}</p>
                                    </div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent left">
                                        <h3 className='wow fadeInLeft' data-wow-duration="0.5s">{t("Product Launch")}</h3>

                                        <p className='wow fadeInLeft' data-wow-duration="0.5s">{t("We deploy and distribute your applications, ensuring seamless accessibility for end-users and accelerating global reach.")}</p>
                                    </div>
                                    <div className="ProccessContent right"></div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent left"></div>
                                    <div className="ProccessContent right">
                                        <h3 className='wow fadeInRight' data-wow-duration="0.5s">{t("Support & Promotion")}</h3>

                                        <p className='wow fadeInRight' data-wow-duration="0.5s">{t("Our dedicated team provides exceptional technical support for all software solutions, enabling all the products to shine brightly through strategic promotion that reaches the target audience with precision and impact.")}</p>
                                    </div>
                                </div>

                                <a href="#" className='c-button fillBtn wow fadeInUp' data-wow-duration="0.5s">{t("Contact Team")}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="WhatsNewWrap">
                <Container >
                    <Row>
                        <Col md={12} className='text-center mb-4'>
                            <h2 className='Title wow fadeInUp'>{t("WHAT'S NEW")}</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className='mb-4'>
                            <div className="BlogWrap wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                                <img src="images/003.png" alt="Product" />

                                <h3>{t("New product name")}</h3>

                                <p>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}</p>

                                <a href="#" className='c-button fillBtn Black'>{t("Read More")}</a>
                            </div>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <div className="BlogWrap wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s" style={{ backgroundColor: "#FD5DA5" }}>
                                <img src="images/003.png" alt="Product" />

                                <h3>{t("New product name")}</h3>

                                <p>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}</p>

                                <a href="#" className='c-button fillBtn Black'>{t("Read More")}</a>
                            </div>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <div className="BlogWrap wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s" style={{ backgroundColor: "#6DCAFC" }}>
                                <img src="images/003.png" alt="Product" />

                                <h3>{t("New product name")}</h3>

                                <p>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}</p>

                                <a href="#" className='c-button fillBtn Black'>{t("Read More")}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="InfoWrap">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>{t("Build, Innovate, Unleash with Metaport")}</h2>

                            <a href="#" className='c-button fillBtn'>{t("Contact Team")}</a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer type="Home" />
        </>
    )
}

export default HomePage