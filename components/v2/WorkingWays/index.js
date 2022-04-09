export default function WorkingWays() {

    return (
        <>
            <section className="working-ways">
                <header className="header">
                    <p>
                        Manera de trabajar 
                    </p>
                </header>

                <main className="body">
                    <ol className="list">
                        <li>
                            Se entrega una <span className="special">encuesta</span> (objetivo, experiencia, etc).
                        </li>
                        <li>
                            Se responden <span className="special">inquietudes</span> que hayan quedado.
                        </li>
                        <li>
                            Se planifica un <span className="special">programa</span> semanal, entrega los Domingos.
                        </li>
                        <li>
                            Todos los miércoles está abierta la <span className="special">casilla de preguntas</span>.
                        </li>
                    </ol>
                </main>
            </section>  

            <style jsx>{`
                .working-ways {
                    width: 100%;
                    background-color: #1B1B1B;
                    color: #fff;
                    padding-top: 5%;
                    padding-bottom: 2%;
                }

                .header {
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                }

                .body {
                    margin-top: 2%;
                    padding: 0% 10%;
                }

                li:first-child {
                    margin-top: 0%;
                }

                li {
                    margin-top: 3%;
                    width: 100%;
                    font-size: .9rem;
                }

                .special {
                    color: #FAB958;
                }

                @media (min-width: 768px) {
                    .working-ways {
                        padding-top: 2%;
                        padding-bottom: 0%;
                    }

                    .header {
                        font-size: 4rem;
                    }

                    .body {
                        margin-top: 1%;
                    }

                    li:first-child {
                        margin-top: 0%;
                    }

                    li {
                        margin-top: 1%;
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
}