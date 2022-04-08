import { useState, useEffect } from 'react';
import { windowPropsContextObj } from './contexts';

export function useWindowProps() {
    const [windowProps, setWindowProps] = useState(windowPropsContextObj);

    useEffect(() => {
        window?.addEventListener('resize', handleResize);
        handleResize();

        window?.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleResize = () => {
        setWindowProps(prevWindowProps => ({
            srollY: prevWindowProps.scrollY,
            width: window?.innerWidth || 0,
            height: window?.innerHeight || 0
        }));
    }

    const handleScroll = () => {
        setWindowProps(prevWindowProps => ({
            width: prevWindowProps.width,
            height: prevWindowProps.height,
            scrollY: window?.scrollY || 0
        }));
    }

    return windowProps;
}
