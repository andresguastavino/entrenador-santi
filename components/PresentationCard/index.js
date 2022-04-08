import Dumbell from "../Utils/Dumbell";

export default function PresentationCard() {

    return (
        <>
            <section className="presentation-card">
                <header className="header">
                    <p>
                        ENTRENADOR: SANTIAGO LONDRA
                    </p>
                </header>

                <main className="body">
                    <div className="logo">
                        <Dumbell />
                    </div>
                    <div className="text">
                        <p>
                            Asesorías 
                        </p>
                        <p>
                            Personales
                        </p>
                    </div>
                </main>

                <footer className="footer">
                    <div className="text">
                        <p>
                            {`"Aún no eres quien vas a llegar a ser"`}
                        </p>
                    </div>

                    <div className="line" />
                </footer>
            </section>

            <style jsx>{`
                .presentation-card {
                    width: 100vw;
                    background-color: #1B1B1B;
                    color: #fff;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 5%;
                }

                .header {
                    width: 100%;
                    color: #6b6363;
                    font-weight: 500;
                }

                .body {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-content: center;
                    align-items: center;
                    margin: 10% 0%;
                }

                .body > .logo {
                    width: 30%;
                }

                .body > .text {
                    width: 65%;
                    font-size: 2.8rem;
                    font-weight: bold;
                    line-height: 2.8rem;
                }

                .footer {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                }

                .footer > .text {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                }

                .footer > .text > p {
                    width: max-content;
                    font-style: italic;
                }


                .footer > .line {
                    width: 50%;
                    margin-top: 3%;
                    height: 2px;
                    background-color: #6b6363;
                }

                @media (min-width: 768px) {
                    .presentation-card {
                        padding: 2% 5%;
                    }

                    .body {
                        margin: 5% 0%;
                        justify-content: center;
                    }

                    .body > .logo {
                        width: 15%;
                    }

                    .body > .text {
                        width: auto;
                        font-size: 6rem;
                        line-height: 6rem;
                        margin-left: 2%;
                    }

                    .footer > .line {
                        margin-top: 1%;
                    }
                }
            `}</style>
        </>
    );
}