import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function ContactPage() {
  return (
    <>
      <header className='font-["IBM_Plex_Mono"] bg-[#080808]'>
        <nav className='bg-[#1b1b1b] rounded-b-xl flex justify-between items-center p-8 max-w-[1600px] mx-auto'>
          <ul className='flex gap-12 text-white'>
            <li><Link href="/" className='text-[#9c9c9c]'>Home</Link></li>
            <li><Link href="/about" className='text-[#9c9c9c]'>About</Link></li>
            <li><Link href="/contact" className='text-[#559c1b]'>Contact</Link></li>
          </ul>
          <div className='flex gap-4 text-2xl' aria-label="Social Media Links">
            <Link href="https://linkedin.com" className='text-[#5f5f5f]' aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
            <Link href="https://behance.net" className='text-[#5f5f5f]' aria-label="Behance">
              <FaBehance />
            </Link>
            <Link href="https://twitter.com" className='text-[#5f5f5f]' aria-label="Twitter">
              <FaTwitter />
            </Link>
          </div>
        </nav>
      </header>
      <main className="min-h-[82vh] flex justify-center bg-[#080808]">
        <section className='flex flex-col max-w-[1200px] p-6'>
          <article className='flex flex-col text-center max-w-[1000px]'>
            <h1 className='text-white text-[44px] font-bold mb-4'>Get in Touch</h1>
            <p className='text-[#808080] font-["IBM_Plex_Mono"] mb-6'>Tak fordi du kiggede forbi!
              Hvis du leder efter en motiveret og detaljeorienteret webudvikler med interesse for front-end
              og responsivt design, så vil jeg meget gerne høre fra dig.
              Uanset om det handler om et projekt, en praktikplads eller en uformel snak, er du velkommen til at
              kontakte mig. Jeg er altid åben for nye muligheder og udvikling.</p>
            <form className="flex flex-col max-w-[400px] gap-4 text-left m-auto w-full">
              <label htmlFor="email" className="text-white font-['IBM_Plex_Mono']">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="p-3 font-['IBM_Plex_Mono'] rounded-lg bg-white border focus:outline-none focus:border-[#559c1b] placeholder:text-[#757575]" />
              <label htmlFor="mobile" className="text-white font-['IBM_Plex_Mono']">Mobile</label>
              <input
                id="mobile"
                type="tel"
                placeholder="Mobile"
                className="p-3 font-['IBM_Plex_Mono'] rounded-lg bg-white text-black border focus:outline-none focus:border-[#559c1b] placeholder:text-[#757575]" />
              <label htmlFor="message" className="text-white font-['IBM_Plex_Mono']">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                rows="5"
                className="p-3 font-['IBM_Plex_Mono'] rounded-lg bg-white text-black border focus:outline-none focus:border-[#559c1b] placeholder:text-[#757575]"></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 font-semibold bg-[#559c1b] text-white py-4 px-8 rounded-[4px]">Submit <IoIosArrowForward aria-hidden="true" /></button>
            </form>
          </article>
        </section>
      </main>
      <footer className='bg-[#1b1b1b] text-center font-["IBM_Plex_Mono"] text-[#9C9C9C] py-8'>Made with ❤️</footer>
    </>
  )
}