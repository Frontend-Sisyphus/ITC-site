import React from 'react';

import Link from 'next/link';

import Button from '@/shared/Button';

import '@/styles/widgets/greetings.css';

export default function Greetings() {
  return (
    <section className="greetings">
      <div className="greetings-left">
        <h1 className="greetings-left-title">ИТС</h1>

        <div className="greetings-left-decorationLine"/>
      </div>

      <div className="greetings-right">
        <h3 className="greetings-right-title">делаем проекты вместе</h3>
      
        <p className="greetings-right-text">
          Информационно-техническое сообщество Финуниверситета — 
          объединяем <br/>студентов, которые развиваются в IT, дизайне 
          и медиа через реальные задачи.
        </p>

        <p className="greetings-right-text">
          Здесь можно войти в действующий проект, предложить свой 
          или собрать команду для хакатона.
        </p>

        <div className="greetings-right-buttonContainer">
          <Button 
            type={"dark"}
            link={""} 
            text={"хочу вступить"} 
            icon={
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.954h18.682l-7.204-7.182L13.228 0l10.181 10.204-10.181 10.182-1.75-1.727 7.204-7.205H0z" fill="#fff"/></svg>  
            }
            styles={" rounded-[44px]"}
            textStyles={"text-[24px]"}
          />
        </div>

        <div className="greetings-right-buttonContainer">
          <Button 
            type={"dark"}
            link={""} 
            text={"наши проекты"} 
            icon={
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.954h18.682l-7.204-7.182L13.228 0l10.181 10.204-10.181 10.182-1.75-1.727 7.204-7.205H0z" fill="#fff"/></svg>
            }
            styles={"ml-[165px] rounded-[44px]"}
            textStyles={"text-[24px]"}
          />
        </div>
      </div>

      <img src="/static/images/greetings-image.svg" alt="" className="greetings-decorationImage"/>
    </section>
  )
}
