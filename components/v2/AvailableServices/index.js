import services from '../../../assets/data/services.json';

export default function AvailableServices() {

    return (
        <>
            <section className="available-services">
                {
                    services.map((service, i) => (
                        <article className="service" key={ i } >
                            <header className="header">
                                <p>
                                    { service.name }
                                </p>
                            </header>

                            <main className="body">
                                <ul>
                                    {
                                        service.features.map((feature, j) => (
                                            <li key={ j }>
                                                { feature }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </main>
                        </article>
                    ))
                }
            </section>

            <style jsx>{`
                .available-services {
                    width: 100%;
                    background-color: #1B1B1B;
                    color: #fff;
                    padding: 5% 0%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .service {
                    width: 50%;
                }

                .service:first-child {
                    border-right: 1px solid #fff;
                    padding-left: 5%;
                }
                
                .service:last-child {
                    border-left: 1px solid #fff;
                    padding-right: 5%;
                }

                .header {
                    width: 100%;
                    text-align: left;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-bottom: 2px solid #FAB958;
                    padding: 5% 0%;
                    padding-left: 5%;
                }

                .body {
                    width: 100%;
                    padding: 5% 0%;
                    padding-left: 5%;
                }

                li {
                    font-size: .9rem;
                    margin-bottom: 3%;
                    text-align: left;
                }

                .body li:last-child {
                    margin-bottom: 0%;
                }

                @media (min-width: 768px) {
                    .header {
                        font-size: 2.5rem;
                        padding: 2% 0%;
                        padding-left: 5%;
                    }

                    .body {
                        padding: 2% 0%;
                        padding-left: 5%;
                    }

                    li {
                        font-size: 2rem;
                        margin-bottom: .5%;
                    }
                }
                
            `}</style>
        </>
    );
}