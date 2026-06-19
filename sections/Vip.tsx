import Image from "next/image";
import React from "react";

const perks = [
  "Agenda mensal garantida com especialistas sênior",
  "Concierge de beleza dedicado, 7 dias por semana",
  "Curadoria de home-care exclusiva e personalizada",
  "Acesso antecipado a novas tecnologias globais",
];

export default function Vip() {
  return (
    <section id="vip" className="py-20 px-6 bg-[#F7F3EE] text-[#efefef]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#13110F] text-silk rounded-3xl p-12 md:p-20 lg:p-24 overflow-hidden relative shadow-soft">
          <div className="relative z-10 max-w-[56ch]">
            <span className="text-[11px] uppercase tracking-[0.35em] mb-6 text-[#B08D63] block">
              L’Adhésion — Membership Privé
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight text-silk">
              O privilégio da <em className="italic">continuidade</em>.
            </h2>
            <p className="text-silk/60 text-lg mb-12 max-w-prose">
              Para mulheres que entendem que beleza é construída em ritual.
              Acesso prioritário, atendimento dedicado e a Aethel inteira a
              serviço da sua melhor versão.
            </p>
            <ul className="space-y-4 mb-12">
              {perks.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-4 text-sm text-silk/85"
                >
                  <span className="size-1.5 rounded-full bg-[#B08D63]" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="inline-block bg-[#B08D63] text-[#13110F] text-sm font-medium py-3.5 px-8 rounded-full hover:bg-[#C6A77B]  transition-colors duration-500"
            >
              Solicitar convite VIP
            </a>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 md:w-1/3 opacity-40 pointer-events-none">
            <img
              src={"/silk-texture.jpeg"}
              alt=""
              aria-hidden
              loading="lazy"
              width={800}
              height={1216}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#13110F]/20 to-[#13110F]" />
          </div>
        </div>
      </div>
    </section>
  );
}
