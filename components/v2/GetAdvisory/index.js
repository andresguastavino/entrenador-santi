import { useContext } from 'react';
import { WindowPropsContext } from '../../../lib/contexts';
import Button from '../../Utils/Button';

export default function GetAdvisory() {

    const windowProps = useContext(WindowPropsContext);

    return (
        <>
            <section className="get-advisory">
                <header className="header">
                    <p>
                        Quiero mi asesoramiento
                    </p>
                </header>

                <main className="body">
                    <Button href="/" label="Online" 
                        width={ windowProps?.width < 768 ? '60%' : '40%' } 
                        margin={ windowProps?.width < 768 ? '1% 0%' : '' } 
                    />
                    <Button href="/" label="Presencial" 
                        width={ windowProps?.width < 768 ? '60%' : '40%' } 
                        margin={ windowProps?.width < 768 ? '1% 0%' : '' } 
                    />
                </main>
            </section>

            <style jsx>{`
                .get-advisory {
                    width: 100%;
                    background-color: #fff;
                    padding: 2% 0%;
                }

                .header {
                    width: 100%;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #000;
                    text-align: center;
                }

                .body {
                    margin-top: 2%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }

                @media (min-width: 768px) {
                    .header {
                        font-size: 4rem;
                    }
                }
            `}</style>
        </>
    );
}