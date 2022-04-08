import { useState, useEffect } from 'react';

export function useWindowProps() {
    const [windowProps, setWindowProps] = useState(null);

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
        setWindowProps({
            ...windowProps,
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    const handleScroll = () => {
        setWindowProps({
            ...windowProps,
            scrollY: window.scrollY
        });
    }

    return windowProps;
}
