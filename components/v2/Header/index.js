import { useState, useEffect, useContext } from 'react';
import { WindowPropsContext } from '../../../lib/contexts';
import Link from 'next/link';

const links = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/asesorias_personalizadas/v1',
        label: 'Asesorias Personalizadas'
    },
    {
        href: '/preguntas_frecuentes',
        label: 'Preguntas frecuentes'
    }
]

export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    
    const windowProps = useContext(WindowPropsContext);

    useEffect(() => {
        const scrollY = windowProps?.scrollY;
        
        if(!scrollY) {
            setScrolled(false);
            return;
        }

        setScrolled(scrollY > 0);
    }, [windowProps]);

    return (
        <>
            <header className={`header ${ scrolled ? 'scrolled' : '' }`}>
                <div className="text">
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

                <div className="line-black" />
            </header>

            <style jsx>{`
                .header {
                    width: 100vw;
                    background-color: #1B1B1B;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 100;
                }

                .header > .text {
                    width: max-content;
                    color: #6b6363;
                    font-weight: 600;
                    padding: 2%;
                }

                .line-black {
                    width: 100vw;
                    opacity: 0;
                    height: 2px;
                    background-color: #000;
                    transition-duration: .5s;
                }

                .scrolled .line-black {
                    opacity: 1;
                    transition-duration: .5s;
                }
            `}</style>
        </>
    );
}