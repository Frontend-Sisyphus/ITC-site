import React from 'react'

export default function Quote() {
  return (
    <section className="relative py-[168px] px-[120px] overflow-hidden">
      <img src="/static/images/quote-image.svg" alt="" className="absolute top-[70px] right-[-60px] w-[632px] h-[448px]"/>

      <p className="h-[56px] text-white text-[48px] text-left font-['Raleway'] font-light">Проект — это правильное решение.</p>

      <p className="h-[56px] pl-[223px] text-white text-[48px] text-left font-['Raleway'] font-light">В нужном месте.</p>
    
      <p className="h-[56px] pl-[489px] text-white text-[48px] text-left font-['Raleway'] font-light">В нужное время.</p>
    </section>
  )
}
