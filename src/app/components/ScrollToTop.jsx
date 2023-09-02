import { useEffect } from 'react';

const ScrollToTop = () => {
    
    useEffect(() => {
        const handleRouteChange = () => {            
            window.scrollTo(0, 0);
        };

        handleRouteChange();
        
    }, []);    

    return null;
};

export default ScrollToTop;