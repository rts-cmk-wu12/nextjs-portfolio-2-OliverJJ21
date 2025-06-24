import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function AboutPage() {
    return (
        <>
            <header className='font-["IBM_Plex_Mono"] bg-[#080808]'>
                <nav className='bg-[#1b1b1b] rounded-b-xl flex justify-between items-center p-8 max-w-[1600px] mx-auto'>
                    <nav>
                        <ul className='flex gap-12 text-white'>
                            <li><Link href="/" className='text-[#9c9c9c]'>Home</Link></li>
                            <li><Link href="/about" className='text-[#559c1b]'>About</Link></li>
                            <li><Link href="/contact" className='text-[#9c9c9c]'>Contact</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <ul className='flex gap-4 text-2xl'>
                            <li>
                                <Link href="https://linkedin.com" className='text-[#5f5f5f]' aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://behance.net" className='text-[#5f5f5f]' aria-label="Behance">
                                    <FaBehance />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com" className='text-[#5f5f5f]' aria-label="Twitter">
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="min-h-[82vh] flex justify-center bg-[#080808]">
                <article className='flex justify-between max-w-[1200px] p-6'>
                    <div className='flex flex-col text-center max-w-[1000px]'>
                        <h1 className='text-white text-[44px] font-bold mb-4'>About Me</h1>
                        <p className='text-[#808080] font-["IBM_Plex_Mono"] mb-6'>Hej, jeg hedder Jonas og er studerende på Center
                            for Medie og Kommunikation (CMK) på Roskilde Tekniske Skole.
                            Jeg hedder Jonas og studerer webudvikling med fokus på front-end og digitalt design. Det, der driver mig,
                            er glæden ved at skabe websites, der ikke bare ser godt ud, men også føles rigtige at bruge. Jeg arbejder primært med HTML, CSS og JavaScript,
                            og jeg er begyndt at udforske React, Tailwind CSS og Figma for at udvide mine kompetencer.
                            Det, jeg elsker ved webudvikling, er den kreative frihed – balancen mellem teknik og æstetik.
                            Uanset om jeg designer en enkel landing page eller bygger en mindre webapp, forsøger jeg altid at finde måder at forbedre både performance og brugeroplevelse.
                            Når jeg ikke koder, bruger jeg tid på fotografi – især street og natur, og lige nu skyder jeg med mit Fujifilm X-T30. Jeg laver også musik i Ableton Live, og når jeg vil koble af, spiller jeg spil som The Witcher 3 og Hades. De kreative interesser hjælper mig med at tænke anderledes og gør mig, efter min mening, til en bedre udvikler.
                            Jeg er nysgerrig af natur og altid klar til at lære noget nyt. Mit mål er at udvikle mig gennem praktiske projekter,
                            erfaring og samarbejde med andre.</p>
                    </div>
                </article>
            </main>
            <footer className='bg-[#1b1b1b] text-center font-["IBM_Plex_Mono"] text-[#9C9C9C] py-8'>Made with ❤️</footer>
        </>
    )
}