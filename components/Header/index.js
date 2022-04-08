import Link from 'next/link';

const links = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/asesorias_personalizadas/v1',
        label: 'Asesorias Personalizadas'
    },
    {
        href: '/preguntas_frecuentes',
        label: 'Preguntas frecuentes'
    }
]

export default function Header() {

    return (
        <>
            <header className="header">
                {
                    links.map((link, i) => (
                        <Link href={` ${link.href} `} key={i} >
                            <a>
                                { link.label }
                            </a>
                        </Link>
                    ))
                }
            </header>

            <style jsx>{`
                .header {
                    width: 100vw;
                    background-color: #000;
                }
            `}</style>
        </>
    );
}