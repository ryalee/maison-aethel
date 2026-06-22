import { ArrowUpRight, MessageCircle } from "lucide-react";
import React from "react";

export default function Contato() {
  return (
    <section className="p-15 md:p-25 flex flex-col md:flex-row gap-20 md:gap-0 justify-around">
      <article className="flex flex-col">
        <div className="mb-10">
          <p className="text-[#C6A77B] uppercase font-medium">Reserve sua experiência</p>
          <h3 className='title text-5xl md:text-6xl'>Inicie sua jornada <br /> de <span className="italic">transformação.</span></h3>
        </div>

        <div>
          <p className="text-[#C6A77B] uppercase font-medium">localização</p>
          <p className="font-medium text-xl">Av. das Nações Unidas, 4800 <br /> Jardim Paulistano - São Paulo, SP</p>
        </div>

        <div className="mt-10">
          <p className="text-[#C6A77B] uppercase font-medium">horários</p>
          <p className="font-medium text-xl">Segunda a Sexta - 09h às 20h <br /> Sábado - 09h às 13h</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
          <a href="#" className="flex items-center gap-2 bg-[#4f8a46] px-5 py-2 text-[#efefef] font-medium rounded-full hover:bg-[#609e57] transition duration-300">
            <MessageCircle/>
            WhatsApp
          </a>

          <a href="#" className="text-sm flex items-center gap-2 border-b border-dashed hover:text-[#C6A77B] font-medium transition duration-300">
            contato@aethel.com <ArrowUpRight/>
          </a>
        </div>
      </article>

      <article className="bg-[#F7F3EE] md:w-[40%] p-10 rounded-2xl shadow-[0px_0px_24px_5px_#a5a5a53e]">
        <form className="flex flex-col">
          <label className="uppercase font-medium text-[#0000006d]">nome completo</label>
          <input type="text" placeholder="Ex: Sofia Alencar" className="border-b border-[#0000006d] pt-2"/>

          <label className="uppercase mt-5 font-medium text-[#0000006d]">E-MAIL</label>
          <input type="email" placeholder="sofia@email.com" className="border-b border-[#0000006d] pt-2"/>

          <label className="uppercase mt-5 font-medium text-[#0000006d]">telefone</label>
          <input type="tel" placeholder="(11) 90000-0000" className="border-b border-[#0000006d] pt-2"/>

          <label className="uppercase mt-5 font-medium text-[#0000006d]">interesse</label>
          <select className="border-b border-[#0000006d]">
            <option value="tratamento-facial">Tratamento Facial</option>
            <option value="tratamento-corporal">Tratamento Corporal</option>
            <option value="procedimento-injetavel">Procedimento Injetável</option>
            <option value="member-vip">VIP</option>
            <option value="avaliacao-geral">Avaliação Geral</option>
          </select>

          <button className="bg-black w-full text-[#efefef] mt-10 py-5 rounded-full hover:scale-101 transition duration-300 cursor-pointer">
            Solicitar Disponibilidade
          </button>
        </form>
      </article>
    </section>
  );
}
