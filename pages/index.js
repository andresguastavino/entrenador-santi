export default function Home() {
    return (
        <>
            <container className="container">
                <h1>Hola Samba!</h1>
                <p>Tu pagina esta en progreso pa 😉</p>
                <p>Atte: el mas crack 😎</p> 
            </container>

            <style jsx>{`
                .container {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;
                    background-color: #000;
                    color: #fff;
                }

                h1, p {
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </>
    )
}
