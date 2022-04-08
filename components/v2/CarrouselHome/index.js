import Dumbell from "../Utils/Dumbell";

export default function CarrouselHome() {

    return (
        <>
            <section className="carrousel">
                {
                    items.map((item, i) => <Item key={i} 
                        itemHeader={item.header} 
                        itemBody={item.body} 
                        headerText={item.headerText}
                        bodyContent={item.bodyContent} 
                    />)
                }
            </section>

            <style jsx>{`
                .carrousel {
                    margin-top: 10vh;
                    height: 90vh;
                }
            `}</style>
        </>
    );
}

function Item({ itemHeader, itemBody, headerText, bodyContent }) {
    
    return (
        <>
            <article className="item">
                {
                    itemHeader ? itemHeader : (
                        <header className="header">
                            { headerText }
                        </header>
                    )
                }

                {
                     itemBody ? itemBody : (
                        <main className="body">
                            { bodyContent }
                        </main>
                    )
                }
            </article>
        </>
    );
}

const items = [
    {
        headerText: 'Salud',
        bodyContent: 'asd'
    },
    {
        header: (
            <>
                <div className="header-icon">
                    {/* <Dumbell /> */}
                </div>
                <div className="header-text">
                    <p>Principios del entrenador</p>
                </div>

                <style jsx>{`
                    .header-icon {

                    }

                    .header-text {
                        font-size: 5rem;
                        color: yellow;
                    }
                `}</style>
            </>
        ),
        body: (
            <>
                
            </>
        )
    }
]