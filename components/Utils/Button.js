import Link from 'next/link';

export default function ButtonLink({ href, label, width = '100%', height = '100%' }) {

    return (
        <>
            <div className="button-link">
                <Link href={ href }>
                    <a>
                        { label }
                    </a>
                </Link>
            </div>

            <style jsx>{`
                .button-link {
                    width: ${ width };
                    height: ${ height };
                    background-color: #1B1B1B;
                    display: flex;
                    border: 1px solid #000;
                    border-radius: 1.5rem;
                    box-shadow: 2px 2px 10px 1px rgba(255,255,255,0.6);
                    -webkit-box-shadow: 2px 2px 10px 1px rgba(255,255,255,0.6);
                    -moz-box-shadow: 2px 2px 10px 1px rgba(255,255,255,0.6);
                    transition-duration: .2s;
                    outline: none;
                }

                .button-link:hover {
                    box-shadow: 2px 2px 10px 5px rgba(255,255,255,0.6);
                    -webkit-box-shadow: 2px 2px 10px 5px rgba(255,255,255,0.6);
                    -moz-box-shadow: 2px 2px 10px 1px 5gba(255,255,255,0.6);
                }

                .button-link:hover a {
                    text-shadow: 0px 0px 10px #fff
                }

                a {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    font-size: 2rem;
                    color: #fff;
                    text-shadow: 0px 0px 5px #fff;
                }
            `}</style>
        </>
    );
}