import { useEffect, useRef, useState } from 'react';
import styles from '../TextSlider.module.css';

const TextSlider = ({ texts, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {        
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);
        
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, texts, interval]);

    return (
        <div className={[styles.slideshow]}>
            {texts.map((text, index) => (
                <h2
                key={index}
                className={`${styles.slide} ${
                  index === currentIndex ? styles.active : ''
                }`}
                style={{ color: text.color }}
                dangerouslySetInnerHTML={{ __html: text.content }}
              />
            ))}
        </div> 
    )
}

export default TextSlider