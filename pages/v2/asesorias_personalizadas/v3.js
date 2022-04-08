import { useContext } from 'react';
import { WindowPropsContext } from '../../lib/contexts';
import Header from "../../components/Header";
import PresentationCard from '../../components/PresentationCard';
import ObjetivosAvanzado from '../../components/Objetivos/ObjetivosAvanzado';

import ButtonLink from "../../components/Utils/Button";
import Lista from '../../components/Objetivos/Lista';
import ManeraTrabajar from '../../components/ManeraTrabajar';

export default function AsesoriasPersonalizadas() {

    const windowProps = useContext(WindowPropsContext);
    const windowWidth = windowProps?.width;
    const buttonWidth = windowWidth < 768 ? '80%' : '30%';
    const buttonHeight = windowWidth < 768 ? '15%' : '20%';

    return (
        <>
            <Header />
            <PresentationCard />
            <ObjetivosAvanzado />
            <ManeraTrabajar />
            {/* <main className="body"> */}
                {/* <header className="header">
                    <p>
                        Asesorías personalizadas
                    </p>
                </header>

                <section className="introduction">
                    <p className="answer">
                        Si tus ideales se alinean con alguno de tus siguientes objetivos, entonces estás en el lugar correcto        
                    </p>
                </section>

                

                             
                <ButtonLink href="/asesorias_personalizadas/presencial" label="PRESENCIAL" width={ buttonWidth } height={ buttonHeight } />
                <ButtonLink href="/asesorias_personalizadas/online" label="ONLINE" width={ buttonWidth } height={ buttonHeight } />
            </main> */}
            {/* <Footer /> */}
        </>
    );
}