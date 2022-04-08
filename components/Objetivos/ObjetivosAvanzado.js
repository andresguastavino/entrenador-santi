import { useState } from 'react';
import objetivos from '../../assets/data/objetivos';
import Dumbell from '../Utils/Dumbell';
import Chevron from '../Utils/Chevron';

export default function ObjetivosAvanzado() {

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
                        objetivos.map((objetivo, i) => (
                            <Objetivo data={objetivo} key={i} />
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

function Objetivo({ data }) {

    const [showing, setShowing] = useState(false);

    return (
        <>
            <article className="objective">
                <header className={`header ${ showing ? 'showing' : '' }`} onClick={() => setShowing(!showing)} >
                    <div className="text">
                        { data.title }
                    </div>
                    <div className="chevron">
                        <Chevron width={ '30%' } rotation={ showing ? -90 : 90 } transitionDuration={ '.5s' }/>
                    </div>
                </header>
                
                {
                    showing && (
                        <main className="body">
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
                    )
                }
            </article>

            <style jsx>{`
                .objective {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 2% 0%;
                }

                .header {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
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
                }

                .showing {
                    background-color: #000;
                    border-color: #000;
                    border-radius: .5rem .5rem 0rem 0rem;
                }

                .header > .text {
                    width: 80%;
                }

                .header > .chevron {
                    width: 20%;
                }

                .body {
                    background-color: #4e4e4e;
                    color: #fff;
                    padding: 3%;
                    border-radius: 0rem 0rem .5rem .5rem;
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
                        padding: 2%;
                    }

                    .body {
                        padding: 5%;
                    }
                }
            `}</style>
        </>
    );
}