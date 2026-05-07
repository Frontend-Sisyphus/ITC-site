import React from 'react';

import Button from '@/shared/Button';

import '@/styles/widgets/madeByMembers.css';

export default function MadeByMembers() {
  return (
    <section className="madeByMembers">
      <h2 className="section-title">сделано участниками ИТС</h2>

      <div className="madeByMembers-contentContainer">
        <div className="madeByMembers-contentContainer-left">
          <div className="madeByMembers-contentContainer-left-topItem">
            <h3 className="madeByMembers-contentContainer-left-topItem-title">telegram-бот "помощник"</h3>

            <p className="madeByMembers-contentContainer-left-topItem-description">Удобный бот с актуальным расписанием. Им уже пользуется [число] студентов.</p>

            <img src="/static/images/phones-image.svg" alt="" className="madeByMembers-contentContainer-left-topItem-image"/>
          
            <Button type={'button-dark'} link={""} text={"перейти в бота"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={"absolute bottom-[20px] right-0 max-w-[274px] rounded-[60px]"} textStyles={"text-[18px]"}/>
          </div>

          <div className="madeByMembers-contentContainer-left-bottomItem">
            <img src="/static/images/education-image.svg" alt="" className="madeByMembers-contentContainer-left-bottomItem-image"/>

            <h3 className="madeByMembers-contentContainer-left-bottomItem-title">Образовательный канал «ИТС Публикации»</h3>

            <p className="madeByMembers-contentContainer-left-bottomItem-description">
              Разбираем IT-темы простым языком. Участники медианаправления 
              ИТС пишут статьи, делают обложки и рассказывают о сложном так, 
              что хочется пробовать самому.
            </p>

            <Button type={"button-dark"} link={""} text={"будь в курсе"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={"mt-[12px] ml-[94px] max-w-[247px] rounded-[60px]"} textStyles={"text-[18px]"}/>
          </div>
        </div>

        <div className="madeByMembers-contentContainer-right">
          <div className="madeByMembers-contentContainer-right-topItem">
            <img src="/static/images/hackaton-image.svg" alt="" className="madeByMembers-contentContainer-right-topItem-image"/>

            <h3 className="madeByMembers-contentContainer-right-topItem-title">победа в хакатоне по разработке для мессенджера MAX</h3>

            <p className="madeByMembers-contentContainer-right-topItem-description">
              В треке «Цифровизация» с решением «Цифровой кампус»
            </p>
          </div>

          <div className="madeByMembers-contentContainer-right-bottomItem">
            <img src="/static/images/university-image.svg" alt="" className="madeByMembers-contentContainer-right-bottomItem-image"/>

            <h3 className="madeByMembers-contentContainer-right-bottomItem-title">Нас знают не только в вузе</h3>

            <p className="madeByMembers-contentContainer-right-bottomItem-description">
              Наши проекты и участники выступают на разных уровнях — 
              от Дней открытых дверей до международных конференций. 
              Показываем разработки, общаемся с экспертами и доказываем, 
              что студенческие IT-проекты могут влиять на повестку образования.<br/><br/>
              Были на: <br/>— Дне открытых дверей Финуниверситета<br/>— Дне науки 
              (с роботом на голосовом управлении)<br/>— Конференции «Форсайт образования» 
            </p>
          </div>
        </div>

        <div className="madeByMembers-contentContainer-firstItem">
          <h3 className="madeByMembers-contentContainer-firstItem-title">telegram-бот "помощник"</h3>

          <p className="madeByMembers-contentContainer-firstItem-description">Удобный бот с актуальным расписанием. Им уже пользуется [число] студентов.</p>

          <img src="/static/images/phones-mobile-image.svg" alt="" className="madeByMembers-contentContainer-firstItem-image"/>
        
          <Button type={'button-dark'} link={""} text={"перейти в бота"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={""} textStyles={"text-[18px]"}/>
        </div>

        <div className="madeByMembers-contentContainer-secondItem">
          <h3 className="madeByMembers-contentContainer-secondItem-title">победа в хакатоне по разработке для мессенджера MAX</h3>

          <p className="madeByMembers-contentContainer-secondItem-description">
            В треке «Цифровизация»<br/> с решением «Цифровой кампус»
          </p>

          <img src="/static/images/hackaton-image.svg" alt="" className="madeByMembers-contentContainer-secondItem-image"/>
        </div>

        <div className="madeByMembers-contentContainer-thirdItem">
          <img src="/static/images/education-mobile-image.svg" alt="" className="madeByMembers-contentContainer-thirdItem-image"/>

          <h3 className="madeByMembers-contentContainer-thirdItem-title">Образовательный канал <br/>«ИТС Публикации»</h3>

          <p className="madeByMembers-contentContainer-thirdItem-description">
            Разбираем IT-темы простым языком. Участники медианаправления 
            ИТС пишут статьи, делают обложки и рассказывают о сложном так, 
            что хочется пробовать самому.
          </p>

          <Button type={"button-dark"} link={""} text={"будь в курсе"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={""} textStyles={"text-[18px]"}/>
        </div>

        <div className="madeByMembers-contentContainer-fourthItem">
          <h3 className="madeByMembers-contentContainer-fourthItem-title">Нас знают не только в вузе</h3>

          <p className="madeByMembers-contentContainer-fourthItem-description">
            Наши проекты и участники выступают на разных уровнях — 
            от Дней открытых дверей до международных конференций. 
            Показываем разработки, общаемся с экспертами и доказываем, 
            что студенческие IT-проекты могут влиять на повестку образования.<br/><br/>
            Были на: <br/>— Дне открытых дверей Финуниверситета<br/>— Дне науки 
            (с роботом на голосовом управлении)<br/>— Конференции «Форсайт образования» 
          </p>

          <img src="/static/images/university-image.svg" alt="" className="madeByMembers-contentContainer-fourthItem-image"/>
        </div>
      </div>
    </section>
  )
}
