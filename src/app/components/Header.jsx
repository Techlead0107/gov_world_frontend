import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'reactstrap'

import Link from 'next/link';
import Image from 'next/image';

import TextSlider from './TextSlider';
import AnimateButton from './AnimateButton';
import HeroContent from './HeroContent';
import Menu from './Menu';
import ScrollToTop from './ScrollToTop';
import { useTranslation } from "react-i18next";

function Header({ type }) {
    const { t } = useTranslation();
    const [isDivVisible, setIsDivVisible] = useState(false);
    const headerRef = useRef();

    const toggleDiv = (e) => {

        setIsDivVisible((prevState) => !prevState);

        e.preventDefault();
    };

    const ScrollDown = () => {

        const hasWindow = typeof window !== 'undefined';

        const height = hasWindow ? window.innerHeight : null;

        window.scrollTo(0, height - 74);
    }

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;

            if (header) {
                if (window.pageYOffset > 0) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            }
        };

        if (typeof window !== 'undefined') {

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const texts = [
        { content: 'INNOVATION', color: '#FF007A' },
        { content: 'INSPIRATION', color: '#8F00FF' },
        { content: 'IMPACT', color: '#01FF89' },
    ];

    return (
        <>

            <ScrollToTop />

            <header className='HeaderWrap' ref={headerRef}>
                <Container>
                    <div className="dFlex">
                        <div className='LogoWrap'>
                            <Link href={"/"}>
                                <Image src="/images/govworldlogo.png" width={50} height={48} alt="Metaport" priority={true} />
                            </Link>
                        </div>

                        <Menu />
                    </div>
                </Container>
            </header>

            <header className='mobileHeader'>
                <Link href={"/"}>
                    <Image src="/images/govworldlogo.png" alt="Metaport" width={50} height={"48"} priority={true} />
                </Link>

                <a href="#" onClick={toggleDiv} className='OpenMenu'>
                    <svg width="50px" height="50px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#fff" /><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#fff" /><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#fff" /></svg>
                </a>

                <div className={`MobileMenuWrap ${isDivVisible ? 'show' : ''}`}>

                    <a href="#" onClick={toggleDiv} className='closeMenu'>
                        <span className="sidr-class-wpex-close__icon" aria-hidden="true">×</span>
                    </a>
                    <Menu />
                </div>

            </header>

            {type === 'Home' &&

                <div className='HomePageHero'>
                    <img className='VectorImage' src="images/Vector.png" alt="" />
                    <HeroContent />
                </div>
            }

            {type === 'About' &&
                <div className='HomePageHero Sub singlePage'>
                    <img src="images/bg-03.png" alt="" />

                    <div className="HeroContent text-center">
                        <Container>
                            <h3>{t("About Us")}</h3>
                            <h1>{t("Tech Maverick")}</h1>
                            <p>{t("Metaport, a prominent software development and IT consulting enterprise headquartered in Dubai, stands as a leading authority embracing versatility and innovation. We are the visionary trailblazers who not only provide a wide range of top-notch software applications but also craft captivating in-house software products that redefine the boundaries of innovation.")}</p>
                        </Container>
                    </div>
                </div>
            }

            {type === 'Contact' &&
                <div className='HomePageHero singlePage'>
                    <img src="images/bg-02.png" alt="" />

                    <div className="HeroContent text-center">
                        <Container>
                            <h1>{t("Get in touch")}</h1>
                            <p>{t("We build powerful modern tech solutions to accelerate business growth, unlocking full potential with smart tech innovations from cloud-based solutions to AI-powered innovations. Let's embark on this thrilling journey together.")}</p>
                        </Container>
                    </div>
                </div>
            }

            {type === 'Expertise' &&
                <div className='ExpertiseHeader singlePage'>
                    <img src="images/lamp.png" alt="" />
                    <div className="HeroContent text-center">
                        <Container>
                            <h1>{t("Innovations Meet Intellgence")}</h1>
                        </Container>
                    </div>
                </div>
            }
        </>
    )
}

export default Header