import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    image: "/treatment-facial.jpeg",
    type: "facial",
    title: "Escultura Facial Bioativa",
    description:
      "Microcorrentes e ativos botânicos nobres para regeneração celular profunda e luminosidade imediata.",
    price: "A partir de R$ 850",
  },
  {
    id: 2,
    image: "/treatment-kit.jpeg",
    type: "Corporal",
    title: "Drenagem Silk & Stone",
    description:
      "Técnica manual exclusiva com infusão de óleos de seda e pedras aquecidas para modelar e acolher.",
    price: "A partir de R$ 1.200",
  },
  {
    id: 3,
    image: "/injectable.jpeg",
    type: "Injetáveis",
    title: "Harmonização Minimalista",
    description:
      "Intervenções sutis focadas na arquitetura natural do seu rosto.",
    price: "Sob avaliação",
  },
];

export default function Services() {
  return (
    <section className="px-20 mb-60" id="tratamentos">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-[#C6A77B] uppercase font-medium">
            protocolo de assinatura
          </p>
          <h1 className="italic text-4xl md:text-5xl">
            Cada tratamento <br /> é uma jornada única.
          </h1>
        </div>

        <a
          href="#contato"
          className="flex text-black hover:text-[#C6A77B] self-end font-medium"
        >
          Ver tratamentos
        </a>
      </div>

      <div className="grid md:grid-cols-3 mt-30 gap-10">
        {services.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              width={200}
              height={200}
              alt={item.title}
              loading="lazy"
              className="w-full aspect-4/5 rounded-2xl object-cover"
            />

            <div className="flex flex-col">
              <p className="text-[#C6A77B] uppercase font-medium mt-5">
                {item.type}
              </p>
              <h3 className="title text-3xl font-medium mt-5">{item.title}</h3>
              <p className="mb-5">{item.description}</p>
              <p className="uppercase font-medium text-[#444] ">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
