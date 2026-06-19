import Image from 'next/image'
import React from 'react'

const feedbacks = [
  {
    id: 1,
    mensagem: "“Mais do que uma clínica, é onde reencontro minha confiança. O cuidado com os detalhes é algo que nunca vi em nenhum outro lugar do mundo.”",
    name: "Beatriz Mendonça",
    role: "Empresária",
    foto: "/testimonial-1.jpeg"
  },
  {
    id: 2,
    mensagem: "“A precisão dos procedimentos é impressionante. O resultado é tão natural que as pessoas notam o brilho, mas nunca o procedimento.”",
    name: "Helena Valença",
    role: "Arquiteta",
    foto: "/testimonial-2.jpeg"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-[#F7F3EE] py-60">
      <div className="flex flex-col items-center">
        <p className="text-[#C6A77B] uppercase font-medium">Vozes da Aethel</p>
        <h3 className='title text-6xl'>Confiança que se <span className="italic">renova </span>a cada visita.</h3>
      </div>

      <div className="flex w-full justify-evenly mt-15">
        {feedbacks.map((item, index) => (
          <article key={index} className='w-[40%] flex flex-col'>
            <p className='text-3xl mb-5'>
              {item.mensagem}
            </p>

            <div className="flex gap-2 items-center">
              <Image
                src={item.foto}
                alt={item.name}
                width={50}
                height={50}
                className='rounded-full'
              />

              <div>
                <p>{item.name}</p>
                <p className='text-sm text-[#252525]'>{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
