import React from 'react';

import Button from "@/shared/Button";

export default function MadeByMembers() {
  return (
    <section className="py-[167px] px-[120px]">
      <h2 className="text-white text-[84px] text-left font-['Alientz'] font-normal uppercase leading-[96px]">сделано участниками ИТС</h2>

      <div className="flex items-start gap-x-[34px] pt-[76px] w-full">
        <div className="relative grid gap-y-[70px]">
          <div className="relative grid gap-y-[12px]">
            <h3 className="pl-[94px] text-white text-[24px] font-['Raleway'] font-normal uppercase">telegram-бот "помощник"</h3>

            <p className="pl-[94px] max-w-[488px] text-white text-[24px] font-['Raleway'] font-normal leading-[120%]">Удобный бот с актуальным расписанием. Им уже пользуется [число] студентов.</p>

            <img src="/static/images/phones-image.svg" alt="" className="mt-[-70px] w-[594px] h-[594px] z-5"/>
          
            <Button link={""} text={"перейти в бота"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={"absolute bottom-[20px] right-0 max-w-[274px] rounded-[60px]"} textStyles={"text-[18px]"}/>
          </div>

          <div className="grid gap-y-[12px]">
            <img src="/static/images/education-image.svg" alt="" className="w-[537px] h-[257px] z-5"/>

            <h3 className="pl-[94px] max-w-[488px] text-white text-[24px] font-['Raleway'] font-normal uppercase">Образовательный канал «ИТС Публикации»</h3>

            <p className="pl-[94px] max-w-[488px] text-white text-[24px] font-['Raleway'] font-normal leading-[120%]">
              Разбираем IT-темы простым языком. Участники медианаправления 
              ИТС пишут статьи, делают обложки и рассказывают о сложном так, 
              что хочется пробовать самому.
            </p>

            <Button link={""} text={"будь в курсе"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={"mt-[12px] ml-[94px] max-w-[247px] rounded-[60px]"} textStyles={"text-[18px]"}/>
          </div>
        </div>

        <div className="grid gap-y-[32px]">
          <div className="grid gap-y-[12px]">
            <img src="/static/images/hackaton-image.svg" alt="" className="w-[493px] h-[356px] z-5"/>

            <h3 className="mt-[12px] max-w-[493px] text-white text-[24px] font-['Raleway'] font-normal uppercase">победа в хакатоне по разработке для мессенджера MAX</h3>

            <p className="max-w-[493px] text-white text-[24px] font-['Raleway'] font-normal leading-[120%]">
              В треке «Цифровизация» с решением «Цифровой кампус»
            </p>
          </div>

          <div className="grid gap-y-[12px]">
            <img src="/static/images/university-image.svg" alt="" className="w-[493px] h-[328px] z-5"/>

            <h3 className="mt-[12px] max-w-[493px] text-white text-[24px] font-['Raleway'] font-normal uppercase">Нас знают не только в вузе</h3>

            <p className="max-w-[493px] text-white text-[24px] font-['Raleway'] font-normal leading-[120%]">
              Наши проекты и участники выступают на разных уровнях — 
              от Дней открытых дверей до международных конференций. 
              Показываем разработки, общаемся с экспертами и доказываем, 
              что студенческие IT-проекты могут влиять на повестку образования.<br/><br/>
              Были на: <br/>— Дне открытых дверей Финуниверситета<br/>— Дне науки 
              (с роботом на голосовом управлении)<br/>— Конференции «Форсайт образования» 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
