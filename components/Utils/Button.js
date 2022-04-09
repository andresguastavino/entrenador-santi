import Link from 'next/link';

export default function ButtonLink({ href, label, width = '100%', backgroundColor = '#1B1B1B', color = '#fff', margin = '0%' }) {

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
                    background-color: ${ backgroundColor };
                    color: ${ color };
                    display: flex;
                    outline: none;
                    padding: 2% 5%;
                    margin: ${ margin };
                }

                a {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                @media (min-width: 768px) {
                    .button-link {
                        padding: 1% 5%;
                    }

                    a {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </>
    );
}