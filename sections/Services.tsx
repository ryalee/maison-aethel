import Image from 'next/image'
import React from 'react'

const services = [
  {
    id: 1,
    image: "/treatment-facial.jpeg",
    type: "facial",
    title: "Escultura Facial Bioativa",
    description: "Microcorrentes e ativos botânicos nobres para regeneração celular profunda e luminosidade imediata.",
    price: "A partir de R$ 850"
  },
  {
    id: 2,
    image: "/treatment-kit.jpeg",
    type: "Corporal",
    title: "Drenagem Silk & Stone",
    description: "Técnica manual exclusiva com infusão de óleos de seda e pedras aquecidas para modelar e acolher.",
    price: "A partir de R$ 1.200",
  },
  {
    id: 3,
    image: "/injectable.jpeg",
    type: "Injetáveis",
    title: "Drenagem Silk & Stone",
    description: "Técnica manual exclusiva com infusão de óleos de seda e pedras aquecidas para modelar e acolher.",
    price: "Sob avaliação",
  }
];

export default function Services() {
  return (
    <section className='px-20'>
      <div className="flex justify-between">
        <div>
          <p className="text-[#C6A77B] uppercase font-medium">protocolo de assinatura</p>
          <h1 className="italic text-5xl">Cada tratamento <br /> é uma jornada única.</h1>
        </div>

        <a
          href="#contato"
          className="flex text-black hover:text-[#C6A77B] self-end font-medium"
        >
          Ver tratamentos
        </a>
      </div>

      <div className="grid grid-cols-3">
        {services.map((item, index ) => (
          <div key={index}>
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
