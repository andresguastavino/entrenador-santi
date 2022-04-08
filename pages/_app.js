import { useWindowProps } from '../lib/hooks';
import { WindowPropsContext } from '../lib/contexts';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    
    const windowProps = useWindowProps();

    return (
        <WindowPropsContext.Provider value={ windowProps } >
            <Component {...pageProps} />
        </WindowPropsContext.Provider>
    );
}