import React from 'react';

import Link from 'next/link';

import Button from '@/shared/Button';

import '@/styles/widgets/joinUs.css';

export default function JoinUs() {
  return (
    <section className="joinUs">
      <img src="/static/images/joinUs-image.svg" alt="" className="joinUs-decorationImage"/>

      <h2 className="section-title light">присоединяйся</h2>

      <div className="joinUs-contentContainer">
        <p className="joinUs-contentContainer-text">Хочешь участвовать в проектах, прокачивать навыки и 
          найти команду единомышленников? Расскажем, как устроено ИТС 
          и что нужно сделать, чтобы влиться.
        </p>

        <Button
          type={'button-light'}
          link={''}
          text={'хочу вступить'}
          icon={<svg width="24" height="27" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.954h18.682l-7.204-7.182L13.228 0l10.181 10.204-10.181 10.182-1.75-1.727 7.204-7.205H0z" fill="#fff"/></svg>  }
          styles={'rounded-[44px]'}
          textStyles={'text-[24px]'}
        />
      </div>
    </section>
  )
}
