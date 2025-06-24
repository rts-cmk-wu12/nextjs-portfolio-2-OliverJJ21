import Link from 'next/link';
import '../app/globals.css';
import Jonas from '../app/jonas.png';
import Image from 'next/image';
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <header className=' font-["IBM_Plex_Mono"] bg-[#080808] '>
        <nav className='bg-[#1b1b1b] rounded-b-xl flex justify-between items-center p-8 max-w-[1600px] mx-auto'>
          <nav>
            <ul className='flex gap-12 text-white'>
              <li><Link href="/" className='text-[#559c1b]'>Home</Link></li>
              <li><Link href="/about" className='text-[#9c9c9c]'>About</Link></li>
              <li><Link href="/contact" className='text-[#9c9c9c]'>Contact</Link></li>
            </ul>
          </nav>
          <div className='flex gap-4 text-2xl'>
            <Link href="https://linkedin.com" className='text-[#5f5f5f]'>
              <FaLinkedinIn />
            </Link>
            <Link href="https://behance.net" className='text-[#5f5f5f]'>
              <FaBehance />
            </Link>
            <Link href="https://twitter.com" className='text-[#5f5f5f]'>
              <FaTwitter />
            </Link>
          </div>
        </nav>
      </header>
      <main className="min-h-[82vh] flex justify-center bg-[#080808]">
        <article className='flex items-center justify-between max-w-[1200px] px-4'>
          <section className='flex flex-col items-start text-left max-w-[700px]'>
            <h1 className='text-white text-[44px] font-bold mb-4'>Jonas</h1>
            <p className='text-[#808080] font-["IBM_Plex_Mono"] mb-6'>Hej, jeg hedder Jonas og er studerende på Center for Medie og Kommunikation (CMK) på Roskilde Tekniske Skole.
              Jeg brænder for webudvikling og digitalt design,
              og jeg udforsker hele tiden nye værktøjer og teknologier for at udvikle mine færdigheder.</p>
            <Link href="/contact" className="flex items-center gap-4 bg-[#3f8e00] text-white font-semibold px-16 py-4 rounded-[4px] shadow-[0_0_20px_rgba(63,142,0,0.6)]">Get in touch <IoIosArrowForward /></Link>
          </section>
          <div>
            <Image src={Jonas} alt="Profile picture" className="rounded-full" />
          </div>
        </article>
      </main>
      <footer className='bg-[#1b1b1b] text-center font-["IBM_Plex_Mono"] text-[#9C9C9C] py-8'>Made with ❤️</footer>
    </>
  );
}