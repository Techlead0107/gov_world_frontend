import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image';

import Link from 'next/link';
import { useTranslation } from "react-i18next";

function Footer({ type }) {
    const { t } = useTranslation();

    return (
        <>
            {type === 'Expertise' &&
                <div className="ExpertiseFooter">
                    <Container>
                        <Row>
                                <Col md={9}>
                                    <h3>{t("Want a Solution for your Business?")}</h3>
                                    <h2>{t("Let Us Know if you Have a Project That Needs to Be Delivered")}</h2>
                                </Col>
                                <Col md={3} className='ExButton'>
                                    <Link href={'/contact'} className='c-button fillBtn'>{t("Contact Team")}</Link>
                                </Col>
                        </Row>
                    </Container>
                </div >
            }

            {
                type === "Home" &&
                <div className="InfoWrap">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2>{t("Build, Innovate, Unleash with Metaport")}</h2>

                                <Link href={'/contact'} className='c-button fillBtn'>{t("Contact Team")}</Link>

                            </Col>
                        </Row>
                    </Container>
                </div>
            }

            {
                type === "About" &&
                <div className="InfoWrap">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2>{t("Build, Innovate, Unleash with Metaport")}</h2>

                                <Link href={'/contact'} className='c-button fillBtn'>{t("Contact Team")}</Link>

                            </Col>
                        </Row>
                    </Container>
                </div>
            }

            {
                type === "Contact" &&
                <div className="InfoWrap">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2>{t("Build, Innovate, Unleash with Metaport")}</h2>

                                <Link href={'/contact'} className='c-button fillBtn'>{t("Contact Team")}</Link>

                            </Col>
                        </Row>
                    </Container>
                </div>
            }

            <footer className='footerWrap'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="widget">

                                <Image src="/images/logo.svg" width={209} height={41} alt="Metaport" className='fLogo' style={{ width: 209, height: 'auto' }} priority={true} />

                                <p>{t("Unleashing the boundless potential for global industries, pursuing excellence with brilliant minds and building powerful tools.")}</p>

                                <ul className='socialMedia'>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-discord"></i></a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="widget" style={{ paddingLeft: 60 }}>
                                <h3>{t("Services")}</h3>

                                <ul>
                                    <li><a href="#">{t("Blockchain + Web3")}</a></li>
                                    <li><a href="#">AR & VR</a></li>
                                    <li><a href="#">{t("App Development")}</a></li>
                                    <li><a href="#">{t("Web Development")}</a></li>
                                    <li><a href="#">UI/UX {t("Design")}</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="widget" style={{ paddingLeft: 40 }}>
                                <h3>{t("Join us")}</h3>

                                <ul>
                                    <li><a href="#">{t("Career")}</a></li>
                                    <li><a href="#">{t("Partners")}</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="widget">
                                <h3>{t("Business Inquiry")}</h3>

                                <div className="inquiry">
                                    <Image src="/images/i-01.png" width={20} height={20} alt="Email" />

                                    <div>
                                        <h5>Email</h5>
                                        <p>business@metaports.co</p>
                                    </div>
                                </div>
                                <div className="inquiry">
                                    <Image src="/images/i-02.png" width={20} height={20} alt="Call" />

                                    <div>
                                        <h5>Phone</h5>
                                        <p>+971 54 374 5479 </p>
                                    </div>

                                </div>
                                <div className="inquiry">
                                    <Image src="/images/i-03.png" width={20} height={20} alt="Notification" />
                                    <div>
                                        <h5>{t("Location")}</h5>
                                        <p>Unit 1, Level G, Emirates Towers Boulevard, Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <hr />
                        <Col md={6}>
                            <p className='copyright'>&copy;2023 <a href="#">metaport</a> {t("Information Technology")} LLC.</p>
                        </Col>
                        <Col md={6} className='text-end'>
                            <ul className='footerMenu'>
                                <li><a href="#">{t("Privacy Policy")}</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    )
}

export default Footer;