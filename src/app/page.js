"use client"; // This is a client component 👈🏽
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
// import WOW from "wowjs";
import Header from "./components/Header";
import GovButton from "./components/GovButton"
import Stack from '@mui/material/Stack';
import Footer from "./components/Footer";
import ProcessTextSlider from "./components/ProcessTextSlider";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    const [isInView, setIsInView] = useState(false);
    const [isInLineView, setIsInLineView] = useState(false);
    const [isInProgressView, setisInProgressView] = useState(false);

    const handleScroll = () => {
        const position =
            window.pageYOffset || document.documentElement.scrollTop;

        //console.log(position);

        if (position > 1700) {
            setisInProgressView(true);
        }

        if (position > 3200) {
            setIsInView(true);
        }

        if (position > 4100) {
            setIsInLineView(true);
        }
    };

    useEffect(() => {
        const isServer = typeof window === "undefined";
        const WOW = !isServer ? require("wowjs") : null;
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const [scrollTrigger, setScrollTrigger] = useState(false);

    const scrollToBottom = () => {
        setScrollTrigger(true);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    const scrollToTop = () => {
        setScrollTrigger(false);
        window.scrollTo({
            top: document.documentElement.clientTop,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const isServer = typeof window === "undefined";
        const WOW = !isServer ? require("wowjs") : null;
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const texts = [
        { content: "Power Up <br>Business Growth", color: "#fff" },
        { content: "Strategic <br> Brilliance", color: "#fff" },
        { content: "100+ Solutions", color: "#fff" },
    ];

    const images = [
        '/images/partner1.png',
        '/images/partner2.png',
        '/images/partner3.png',
        '/images/partner4.png',
        '/images/partner5.png',
        '/images/partner6.png',
        '/images/partner7.png',
        '/images/partner8.png',
        '/images/partner9.png',
        '/images/partner10.png',
        '/images/partner11.png',
        '/images/partner12.png',
        '/images/partner13.png',
        '/images/partner14.png',
        '/images/partner15.png',
        '/images/partner16.png',
        '/images/partner17.png',
        '/images/partner18.png',
        '/images/partner19.png',
        '/images/partner20.png',
        '/images/partner1.png',
        '/images/partner2.png',
        '/images/partner3.png',
        '/images/partner4.png',
        '/images/partner5.png',
        '/images/partner6.png',
        '/images/partner7.png',
        '/images/partner8.png',
        '/images/partner9.png',
        '/images/partner10.png',
        '/images/partner11.png',
        '/images/partner12.png',
        '/images/partner13.png',
        '/images/partner14.png',
        '/images/partner15.png',
        '/images/partner16.png',
        '/images/partner17.png',
        '/images/partner18.png',
        '/images/partner19.png',
        '/images/partner20.png',
        '/images/partner1.png',
        '/images/partner2.png',
        '/images/partner3.png',
        '/images/partner4.png',
        '/images/partner5.png',
        '/images/partner6.png',
        '/images/partner7.png',
        '/images/partner8.png',
        '/images/partner9.png',
        '/images/partner10.png',
        '/images/partner11.png',
        '/images/partner12.png',
        '/images/partner13.png',
        '/images/partner14.png',
        '/images/partner15.png',
        '/images/partner16.png',
        '/images/partner17.png',
        '/images/partner18.png',
        '/images/partner19.png',
        '/images/partner20.png',
    ];

    return (
        <main>
            <Header type="Home" />

            <div className="ServiceWrap">
                <Container className="RowLine">
                    <h3>{t("Strategic Partners")}</h3>

                    <Row>
                        <Col md={12} className="LineAnimation" style={{ position: "relative" }}>
                            {images.map((image, index) => (
                                <img className="Partner" key={index} src={image} alt={`Partner${index}`} />
                            ))}
                        </Col>
                    </Row>
                </Container>
                {/* <Container className="RowLine">
                    <Row>
                        <Col md={12} className="LineAnimation" style={{ position: "relative" }}>
                            {images1.map((image, index) => (
                                <img className="Partner" key={index} src={image} alt={`Partner${index}`} />
                            ))}
                        </Col>
                    </Row>
                </Container> */}
            </div>

            <div className="ServiceWrap">
                <Container>
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <Container className="ServiceDropWrap">
                                <Row>
                                    <Col md={1}></Col>
                                    <Col md={10}>
                                        <div >
                                            <h1>Welcome home, Diamond hands.</h1>
                                            <p>If you hold a DEX token or an NFT that you don't want to sell, but you would like the ability to borrow stablecoins from your peers against its value, then you are in the right place.</p>

                                            <p>You choose all your loan terms and keep all your crypto until a peer funds your loan. If the token or NFT you hold is a strategic partner of GovWorld then you may be entitled to keep native benefits associated while stablecoin loans are active.</p>

                                            <p>After all, you deserve it because you're not a paper-handed dumper,
                                                your hands are DIAMOND.</p>
                                        </div>
                                    </Col>
                                    <Col md={1}></Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ServiceWrap">
                <Container>
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <Container className="LoanMarketPlace">
                                <h2>Finally, stablecoin loans for strong-holders</h2>
                                <Row>
                                    <Col md={8} className="ThreeColors">
                                        <img className="Loan" src="/images/loan_marketplace.png" alt="Loan" />

                                    </Col>
                                    <Col md={4}>
                                        <div className="P2P">
                                            <h1>Peer to Peer</h1>
                                            <p>The defi "eBay" for short-term loans to community members.
                                                Most stablecoin yield pools are made for very few approved tokens and generate low APY%.
                                                Our users set their own loan terms and compete for loans which generate the highest APY% to lenders.
                                            </p>

                                            {/* <GovButton
                                                NavigatePath="/contact"
                                                ButtonName="Go"
                                            /> */}
                                        </div>
                                        <Stack className="GoButton" spacing={2} direction="row">
                                            <GovButton
                                                navigatePath="/"
                                                buttonName="Go"
                                                length={5}
                                            />
                                        </Stack>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="ServiceWrap">
                <Container>

                    {/* <img className='WhatsNewWrap' src="images/apybackground.png" alt="" /> */}
                    <h2 className="APYTitle">
                        {t("Generate the highest APY%")}
                    </h2>
                    <Container>
                        <Row>
                            <Col md={4} className="mb-4">
                                <div
                                    className="BlogWrap wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="BlackGround">
                                        <h2>{t("120% APY")}</h2>
                                        <h3>{t("USDT")}</h3>
                                        <p>
                                            {t(
                                                "DEX TOKEN LOAN OFFER"
                                            )}
                                        </p>
                                        <h5>{t("COLLATERAL:")}</h5>
                                        <h4>{t("DXDY, GMFAM")}</h4>
                                        <h5>{t("TERM:")}</h5>
                                        <h4>{t("14 DAYS")}</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div
                                    className="BlogWrap wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="BlackGround">
                                        <h2>{t("120% APY")}</h2>
                                        <h3>{t("USDT")}</h3>
                                        <p>
                                            {t(
                                                "DEX TOKEN LOAN OFFER"
                                            )}
                                        </p>
                                        <h5>{t("COLLATERAL:")}</h5>
                                        <h4>{t("DXDY, GMFAM")}</h4>
                                        <h5>{t("TERM:")}</h5>
                                        <h4>{t("14 DAYS")}</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div
                                    className="BlogWrap wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="BlackGround">
                                        <h2>{t("120% APY")}</h2>
                                        <h3>{t("USDT")}</h3>
                                        <p>
                                            {t(
                                                "DEX TOKEN LOAN OFFER"
                                            )}
                                        </p>
                                        {/* <h2>{t("USDT")}</h2>
                                <h2>{t("USDT")}</h2> */}
                                        <h5>{t("COLLATERAL:")}</h5>
                                        <h4>{t("DXDY, GMFAM")}</h4>
                                        <h5>{t("TERM:")}</h5>
                                        <h4>{t("14 DAYS")}</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <h2 className="APYTitle1">
                            {t("Approved Collaterals")}
                        </h2>
                        <Row>
                            <Col md={4} className="mb-4">
                                <div
                                    className="BlogWrap wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="BlackGround1">
                                        <h2>{t("12")}</h2>
                                        <h3>{t("DEX TOKENS")}</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div
                                    className="BlogWrap wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="BlackGround1">
                                        <h2>{t("24")}</h2>
                                        <h3>{t("ELITE PARTNERS")}</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div
                                    className="BlogWrap wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="BlackGround1">
                                        <h2>{t("8")}</h2>
                                        <h3>{t("VIP PARTNERS")}</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Stack className="APYButton" spacing={2} direction="row">
                                <GovButton
                                    className="APYButton"
                                    navigatePath="/"
                                    buttonName="Learn More"
                                    length={6}
                                />
                            </Stack>
                        </Row>
                    </Container>
                </Container>

            </div>


            {/* animation monkey */}
            <div className="DevelopmentProcess animated">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2 className="Title text-white wow fadeIn">
                                <span>{t("If it’s on-chain, you can borrow against it")} </span>
                                <p>No need to sell your favorite DEX token or NFT.
                                    Community keep your gems and borrow stablecoins against their value.
                                    Projects partner with GovWorld and give your community even more benefits such as keeping tier level benefits associated with your token or NFT.
                                </p>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="home-payments__globe-line">
                        <Col md={12} className="text-center">
                            <div className="ProcessWrap home-payments__bottom animated">
                                <div className="BlockContent home-payments__lower-svg">
                                    <div className="ProccessContent left LeftPic">
                                        <img src="/images/monkey.png"
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        />
                                    </div>
                                    <div className="col-md-6 ProccessContent right outLine">
                                        <h3
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("NFTs")}
                                        </h3>

                                        <p
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "Borrow stablecoins against value of any NFT collection on OpenSea without risk.  Liquidation is based solely on timely payback. Just pay back the loan on time and keep your NFT. "
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="BlockContent home-payments__lower-svg">
                                    <div className="ProccessContent left outLine1">
                                        <h3
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("DEX TOKENS")}
                                        </h3>

                                        <p
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "DEX tokens that are approved by our community can be used as collateral for stablecoin loans. DEX tokens can also be designated as a strategic partner of GovWorld unlocking even more benefits for their community. "
                                            )}
                                        </p>
                                    </div>
                                    <div className="ProccessContent right">
                                        <img src="/images/dex tokens 1.png"
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        />
                                    </div>
                                </div>

                                <div className="BlockContent home-payments__lower-svg">
                                    <div className="ProccessContent left LeftPic">
                                        <img src="/images/staking pool 1.png"
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        />
                                    </div>
                                    <div className="ProccessContent right outLine">
                                        <h3
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("STAKED TOKENS")}
                                        </h3>

                                        <p
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "Staked tokens in yield farming pools can be used as collateral if the project uses a synthetic claim-token method for unstaking. GovWorld pegs the USD value of the synthetic to the real trading price native token. "
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="BlockContent home-payments__lower-svg">
                                    <div className="ProccessContent left outLine1">
                                        <h3
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("CLAIMBOARD TOKENS")}
                                        </h3>

                                        <p
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "Tokens awaiting distribution on a claimboard can be used as collateral if the project uses a synthetic claim-token method for claiming as GovLend pegs the USD value of the synthetic to the real native tokens live trading price. "
                                            )}
                                        </p>
                                    </div>
                                    <div className="ProccessContent right">
                                        <img src="/images/claimboard 1.png"
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        />
                                    </div>
                                </div>

                                {/* <div className="BlockContent home-payments__lower-svg">
                                    <div className="ProccessContent left">
                                        <h3
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("DEX TOKENS")}
                                        </h3>

                                        <p
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "We work hand in hand with your business department to architect and develop software solutions collaboratively delivering product updates through agile iterations."
                                            )}
                                        </p>
                                    </div>
                                    <div className="ProccessContent blank right"></div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent blank left"></div>
                                    <div className="ProccessContent right">
                                        <h3
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("Testing & Bug Fixing")}
                                        </h3>

                                        <p
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "We strongly believe in the importance of thorough testing to ensure a top-notch product, and thus we employ both automated and manual testing methods aiming to quickly identify and fix any bugs that may affect the quality."
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent left">
                                        <h3
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("Product Launch")}
                                        </h3>

                                        <p
                                            className="wow fadeInLeft"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "We deploy and distribute your applications, ensuring seamless accessibility for end-users and accelerating global reach."
                                            )}
                                        </p>
                                    </div>
                                    <div className="ProccessContent blank right"></div>
                                </div>

                                <div className="BlockContent">
                                    <div className="ProccessContent blank left"></div>
                                    <div className="ProccessContent right">
                                        <h3
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t("Support & Promotion")}
                                        </h3>

                                        <p
                                            className="wow fadeInRight"
                                            data-wow-duration="0.5s"
                                        >
                                            {t(
                                                "Our dedicated team provides exceptional technical support for all software solutions, enabling all the products to shine brightly through strategic promotion that reaches the target audience with precision and impact."
                                            )}
                                        </p>
                                    </div>
                                </div> */}

                                {/* <Link
                                    href={"/contact"}
                                    className="c-button fillBtn wow fadeInUp"
                                    data-wow-duration="0.5s"
                                >
                                    {t("Contact Team")}
                                </Link> */}
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ServiceWrap">
                <Container>
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <Container className="Rocketship">
                                <Row>
                                    <Col md={12}>
                                        <div >
                                            <h5>Power-Up your</h5>
                                            <h4>PROJECT</h4>
                                            <h5>Today!</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Stack className="APYButton" spacing={2} direction="row">
                                        <GovButton
                                            className="APYButton"
                                            navigatePath="/"
                                            buttonName="Learn More"
                                            length={6}
                                        />
                                    </Stack>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Boosts">
                <Container>
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <h1>Boosts:</h1>
                                        <h2>Aligning the interests of projects and communities.</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div>
                                            <h3>Strategic Partners</h3>
                                        </div>
                                        <div className="Boosts1">
                                            <h4>Reduce Sell Pressure</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>

                                            <h4>Protect Price Floor</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>

                                            <h4>Give your community play credit</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>

                                            <h4>Unlock locked tokens</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <h3>Community Members</h3>
                                        </div>
                                        <div className="Boosts1">
                                            <h4>Strong-hold your favorite crypto</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>

                                            <h4>Don’t risk losing your NFT</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>

                                            <h4>Keep your benefits</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>

                                            <h4>Monetize locked tokens</h4>
                                            <p>It's a dangerous business, Frodo, going out your door. You step onto the roadIt's a dangerous business, Frodo, going out your door. You step onto the road</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Friends">
                <Container>
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <Container className="">
                                <Row>
                                    <Col md={8} className="">
                                        <img className="" src="/images/partnerfi 2 1.png" alt="Loan" />
                                    </Col>
                                    <Col md={4}>
                                        <div className="Friends-bottom">
                                            <h1>Become a
                                                Strategic Partner</h1>
                                            <p>Whether you want to get your token or NFT collection approved
                                                as collateral for stablecoin loans, give your community added benefits
                                                to hold your token or NFT, or raise funds with the most diamond-handed
                                                community in the crypto space, you are in the right place.
                                            </p>

                                            {/* <GovButton
                                                NavigatePath="/contact"
                                                ButtonName="Go"
                                            /> */}
                                        </div>
                                        <GovButton
                                            className="APYButton"
                                            navigatePath="/"
                                            buttonName="Learn More"
                                            length={6}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Banks">
                <Container >
                    <Row>
                        <Col md={12} style={{ position: "relative" }}>
                            <Container className="">
                                <Row>
                                    <Col md={6}>
                                        <div className="Banks-bottom">
                                            <h1>Become a
                                                Stablecoin Lender</h1>
                                            <p>Want higher APY% on your stablecoins?  GovWorld lending protocol is a peer-to-peer
                                                lending platform that aims to differentiate itself from other stablecoin yield platforms
                                                that create pools with low rates of return or vaults with high risk.  We empower our partner
                                                communities to create their own loan terms, including the high APY% they offer lenders.
                                                Lenders can browse the loan marketplace for the best risk to reward opportunities.
                                            </p>

                                            {/* <GovButton
                                                NavigatePath="/contact"
                                                ButtonName="Go"
                                            /> */}
                                        </div>
                                        <GovButton
                                            className="APYButton"
                                            navigatePath="/"
                                            buttonName="Learn More"
                                            length={6}
                                        />
                                    </Col>
                                    <Col md={6} className="">
                                        <img className="" src="/images/bank 7 2.png" alt="Loan" />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <Footer type="Home" /> */}
        </main>
    );
}
