import { useState, useEffect, useContext } from 'react';
import { WindowPropsContext } from '../../../lib/contexts';
import links from '../../../assets/data/links.json';
import Link from 'next/link';

export default function Header() {

    const [borderWidth, setBorderWidth] = useState(0);
    
    const windowProps = useContext(WindowPropsContext);

    useEffect(() => {
        const min = 10,
            max = windowProps?.height / 3 || 300,
            scrollY = windowProps?.scrollY;

        if(!scrollY) { 
            setBorderWidth(0);
            return;
        }

        if(scrollY < min) setBorderWidth(0);
        else if(scrollY >= max) setBorderWidth(100);  
        else setBorderWidth(scrollY * 100 / max);
    }, [windowProps]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <header className={`header ${ borderWidth > 0 ? 'scrolled' : '' }`}>
                <div className="text" onClick={ handleClick }>
                    <p>
                        ENTRENADOR: SANTIAGO LONDRA
                    </p>
                </div>

                <div className="hamburger">

                </div>

                <div className="links">
                    {/* {
                        links.map((link, i) => (
                            <div className="link"  key={i} >
                                <Link href={` ${link.href} `}>
                                    <a>
                                        { link.label }
                                    </a>
                                </Link>
                            </div>
                        ))
                    } */}
                </div>

                {/* <div className="line-black" /> */}
            </header>

            <style jsx>{`
                .header {
                    width: 100vw;
                    background-color: #1B1B1B;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 200;
                    transition-duration: .5s;
                }

                .header.scrolled {
                    box-shadow: 0px 5px 20px 2px rgba(0,0,0,0.7);
                    -webkit-box-shadow: 0px 5px 20px 2px rgba(0,0,0,0.7);
                    -moz-box-shadow: 0px 5px 20px 2px rgba(0,0,0,0.7);
                    transition-duration: .5s;
                }

                .header > .text {
                    width: max-content;
                    color: #fff;
                    text-shadow: 0 0 2px #fff;
                    font-weight: 600;
                    padding: 2%;
                    cursor: pointer;
                }

                .line-black {
                    width: ${ borderWidth }%;
                    height: 2px;
                    background-color: #000;
                }
            `}</style>
        </>
    );
}