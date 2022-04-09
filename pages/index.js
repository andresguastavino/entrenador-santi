import { useContext } from 'react';
import { WindowPropsContext } from '../lib/contexts';
import Button from '../components/Utils/Button';

export default function Home() {

    const windowProps = useContext(WindowPropsContext);

    return (
        <>
            <div className="container">
                    <Button href="/v1" label="v1" 
                        width={ windowProps?.width < 768 ? '60%' : '40%' } 
                        margin={ windowProps?.width < 768 ? '4% 0%' : '' } 
                    />
                    <Button href="/v2" label="v2" 
                        width={ windowProps?.width < 768 ? '60%' : '40%' } 
                        margin={ windowProps?.width < 768 ? '4% 0%' : '' } 
                    />
            </div>

            <style jsx>{`
                .container {
                    width: 100vw;
                    height: 100vh;
                    background-color: #000;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-content: center;
                }
            `}</style>
        </>
    )
}