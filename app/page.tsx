import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex py-6 px-8 justify-between items-center z-10 text-[#efefef]">
        <h1 className="text-3xl title text-[#]">Aethel Estética</h1>

        <nav className="w-lg flex uppercase justify-between">
          <a href="#filosofia" className="hover:text-[#fce1c1] transition duration-300">filosofia</a>
          <a href="#tratamentos" className="hover:text-[#fce1c1] transition duration-300">tratamentos</a>
          <a href="#membrovip" className="hover:text-[#fce1c1] transition duration-300">membro vip</a>
          <a href="#contato" className="hover:text-[#fce1c1] transition duration-300">contato</a>
        </nav>  

        <a href="#contato" className="border border-[#f0eaea] rounded-full text-sm cursor-pointer py-2 px-6 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] transition duration-400">
          Agendar Consulta
        </a>
      </header>

      <main className="">
        <Hero/>
        <Services/>
      </main>

      <footer>

      </footer>
    </>
  );
}
