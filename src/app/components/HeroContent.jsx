import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap'

import Link from 'next/link';
import TextSlider from './TextSlider';
import AnimateButton from './AnimateButton';
import styles from './css/HeroContent.module.css'
// import Icon from '@mdi/react';
// import { mdiArrowDownBox } from '@mdi/js';
import { useTranslation } from "react-i18next";

function HeroContent({ interval = 3000 }) {
    const { t } = useTranslation();

    const texts = [
        { content: 'CRYPTO', color: '#FF007A' },
        { content: 'CRYPTO', color: '#8F00FF' },
        { content: 'CRYPTO', color: '#01FF89' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['red', 'blue', 'green'];

    const timeoutRef = useRef(null);
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, interval);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, texts, interval]);

    const buttonColorClass = `button-color-${currentColorIndex}`;

    return (
        <div className="HeroContent">


            <Container>
                <Container>
                    <Row>
                        <Col md={6} className="SpaceText">
                            <h3>{t("Unlock your")}</h3>

                            <div className={[styles.slideshow]}>
                                {texts.map((text, index) => (
                                    <h2
                                        key={index}
                                        className={`${styles.slide} ${index === currentIndex ? styles.active : ''
                                            }`}
                                        style={{ color: text.color }}
                                        dangerouslySetInnerHTML={{ __html: text.content }}
                                    />
                                ))}
                            </div>

                            <p>{t("$GOV is the ultimate governance token because it unlocks the ability to borrow stablecoins against the value of ALL other approved  DEX tokens and NFTs")}</p></Col>
                        <Col md={6}>
                            <img className='Spaceguy' src="images/spaceguy.png" alt="SpaceGuy" />

                        </Col>
                    </Row>
                </Container>


            </Container>
            <br />
        </div>
    )
}

export default HeroContent