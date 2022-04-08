import Dumbell from "../Utils/Dumbell";

export default function Lista() {

    return (
        <>
            <section className="list">
                <header className="header">
                    <div className="logo">
                        <Dumbell />
                    </div>
                    <div className="text">
                        <p>
                            Objetivos
                        </p>
                    </div>
                </header>  
                
                <main className="body">
                    <ul>
                        <li className="item">
                            <div className="box"/>
                            <div className="text">
                                Rendimiento
                            </div>
                        </li>
                        <li className="item">
                            <div className="box"/>
                            <div className="text">
                                Estética
                            </div>
                        </li>
                        <li className="item">
                            <div className="box"/>
                            <div className="text">
                                Salud
                            </div>
                        </li>
                    </ul>
                </main>
            </section>

            <style jsx>{`
                .list {
                    width: 100%;
                }

                .header {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                }

                .logo {
                    width: 15%;
                }

                .header > .text {
                    margin-left: 1%;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #fff;
                }

                ul {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 2% 0%;
                }

                .item {
                    width: 100%;
                    padding-left: 30%;
                    margin: 1% 0%;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;
                    align-items: center;
                }

                .box {
                    width: 20px;
                    height: 20px;
                    background-color: #fff;
                }

                .item > .text {
                    margin-left: 5%;
                    color: #fff;
                    font-size: 1.2rem;
                }

                @media (min-width: 768px) {

                    .logo {
                        width: 5%;
                    }

                    .header > .text {
                        font-size: 3.5rem;
                    }

                    ul {
                        margin: 1% 0%;
                    }

                    .item {
                        padding-left: 40%;
                        margin: .5% 0%;
                    }

                    .box {
                        width: 30px;
                        height: 30px;
                    }

                    .item > .text {
                        margin-left: 2%;
                        font-size: 2rem;
                    }
                }
            `}</style>
        </>
    );
}