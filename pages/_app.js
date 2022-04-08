import { useWindowSize } from '../lib/hooks';
import { WindowSizeContext } from '../lib/contexts';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    
    const windowSize = useWindowSize();

    return (
        <WindowSizeContext.Provider value={ windowSize } >
            <Component {...pageProps} />
        </WindowSizeContext.Provider>
    );
}