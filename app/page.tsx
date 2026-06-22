import Contato from "@/sections/Contato";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Vip from "@/sections/Vip";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex py-6 px-8 justify-between items-center z-10 text-[#efefef]">
        <h1 className="text-3xl title">Aethel Estética</h1>

        <nav className="w-lg hidden md:flex uppercase justify-between">
          <a href="#filosofia" className="hover:text-[#fce1c1] transition duration-300">filosofia</a>
          <a href="#tratamentos" className="hover:text-[#fce1c1] transition duration-300">tratamentos</a>
          <a href="#membrovip" className="hover:text-[#fce1c1] transition duration-300">membro vip</a>
          <a href="#contato" className="hover:text-[#fce1c1] transition duration-300">contato</a>
        </nav>  

        <a href="#contato" className="w-29 text-center md:w-auto border border-[#f0eaea] rounded-full text-sm cursor-pointer py-2 px-6 hover:bg-[#C6A77B] hover:text-black hover:border-none transition duration-400">
          Agendar Consulta
        </a>
      </header>

      <main className="">
        <Hero/>
        <Services/>
        <Vip/>
        <Testimonials/>
        <Contato/>
      </main>

      <footer className="bg-[#F7F3EE] w-full self-center py-8 md:py-15 mt-20 px-10 flex flex-col justify-between items-center text-[#00000083] gap-5">
        <h1 className="text-3xl title">Aethel Estética</h1>

        <nav className="w-full text-sm flex uppercase justify-around md:justify-around">
          <a>instagram</a>
          <a>membro vip</a>
          <a>privacidade</a>
        </nav> 

        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
        <p>Desenvolvido por <a href="https://www.zunbee.com.br" target="_blank" className="text-[#ffc300] font-bold [text-shadow:1px_1px_1px_#4E4E4E] hover:[text-shadow:1px_1px_2px_#f9db7b] transition-all duration-300">Zunbee 🐝</a></p>
      </footer>
    </>
  );
}