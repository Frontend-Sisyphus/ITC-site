import React from 'react';

import '@/styles/widgets/quote.css';

export default function Quote() {
  return (
    <section className="quote">
      <img src="/static/images/quote-image.svg" alt="" className="quote-decorationImage"/>

      <p className="quote-text">Проект — это правильное решение.</p>

      <p className="pl-[223px] quote-text">В нужном месте.</p>
    
      <p className="pl-[489px] quote-text">В нужное время.</p>
    </section>
  )
}
