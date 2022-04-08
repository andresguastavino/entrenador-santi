import { useState, useEffect, useRef } from 'react';
import objectives from '../../../assets/data/objectives';
import Dumbell from '../../Utils/Dumbell';
import Chevron from '../../Utils/Chevron';

export default function Objectives() {

    return (
        <>
            <section className="objectives">
                <header className="header">
                    {/* <div className="logo">
                        <Dumbell />
                    </div> */}
                    <div className="text">
                        <p>
                            Objetivos
                        </p>
                    </div>
                </header>

                <main className="body">
                    {
                        objectives.map((objective, i) => (
                            <Objective data={objective} key={i} />
                        ))
                    }
                </main>
            </section>

            <style jsx>{`
                .objectives {
                    width: 100vw;
                    height: 100%;
                    background-color: #1B1B1B;
                    display: flex;
                    flex-wrap: wrap;
                }

                .body {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 0% 10%;
                }

                @media (min-width: 768px) {
                    .body {
                        justify-content: space-around;
                        padding: 0% 2%;
                    }
                }
            `}</style>
        </>
    );
}

function Objective({ data }) {

    const [showing, setShowing] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    const handleTransitionEnd = () => {
        setTransitioning(false);
    }

    const handleClick = () => {
        setShowing(!showing);
        setTransitioning(true);
    }

    return (
        <>
            <article className="objective">
                <header className={`header ${ showing ? 'showing' : '' }`} onClick={handleClick} >
                    <div className="text" unselectable="on">
                        { data.title }
                    </div>
                    <div className="chevron" unselectable="on">
                        <Chevron width={ '30%' } rotation={ showing ? -90 : 90 } transitionDuration={ '.5s' }/>
                    </div>
                </header>

                <main className={`body ${ showing ? 'showing' : '' }`} onTransitionEnd={handleTransitionEnd} >
                    {
                        data.body.map((cnt, i) => (
                            cnt.type === 'p' ? 
                                (
                                    <p key= { i }>
                                        { cnt.content }
                                    </p>
                                )
                            : cnt.type === 'l' ?
                                (
                                    <ul key= { i }>
                                        { 
                                            cnt.content.map((item, j) => (
                                                <li key={ j }>
                                                    { item }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            : null
                        ))
                    }
                </main>
            </article>

            <style jsx>{`
                .objective {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: baseline;
                    margin: 2% 0%;
                }

                .header {
                    width: 100%;
                    height: min-content;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 5%;
                    cursor: pointer;
                    color: #fff;
                    font-weight: bold;
                    background-color: #1B1B1B;
                    border: 1px solid #6b6363;
                    border-radius-bottom: 0;
                    border-radius: .5rem;
                    transition-duration: 1s;
                    z-index: 100;
                }

                .header.showing {
                    background-color: #000;
                    border-color: #000;
                    border-radius: .5rem .5rem 0rem 0rem;
                }

                .header > .text {
                    width: 80%;
                    text-align: left;
                    -webkit-user-select: none; /* Safari */        
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* IE10+/Edge */
                    user-select: none; /* Standard */
                }

                .header > .chevron {
                    width: 20%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    -webkit-user-select: none; /* Safari */        
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* IE10+/Edge */
                    user-select: none; /* Standard */
                }

                .body {
                    position: ${ showing ? 'relative' : transitioning ? 'relative' : 'absolute' };
                    height: min-content;
                    background-color: #4e4e4e;
                    color: #fff;
                    padding: 3%;
                    border-radius: 0rem 0rem .5rem .5rem;
                    opacity: 0;
                    transform: translateY(-100%);
                    transition-property: opacity, transform;
                    transition-duration: .2s, .8s;
                }
            
                .body.showing {
                    position: relative;
                    opacity: 1;
                    transform: translateY(0px);
                    transition-property: opacity, transform;
                    transition-duration: 1.5s, .2s;
                }

                .body > p {
                    margin: 3% 0%;
                }

                .body > p:first-child {
                    margin-top: 0%;
                }

                .body > ul {
                    list-style: inside;
                }

                @media (min-width: 768px) {
                    .objective {
                        width: 30%;
                    }

                    .header {
                        font-size: 2rem;
                        padding: 2% 5%;
                    }

                    .body {
                        padding: 5%;
                    }
                }
            `}</style>
        </>
    );
}