import React from 'react';

import Link from 'next/link';

import Button from '@/shared/Button';

export default function Greetings() {
  return (
    <section className="relative flex justify-between items-start gap-x-[12px] pt-[79px] pl-[96px] pr-[120px] overflow-hidden">
      <div className="grid gap-y-[58px]">
        <h1 className="text-white text-[216px] text-left font-['Alientz'] font-normal uppercase leading-[72px]">ИТС</h1>

        <div className="ml-[24px] w-[594px] h-[4px] bg-[#ffffff]"/>
      </div>

      <div className="flex flex-wrap gap-y-[16px] pt-[95px]">
        <h3 className="text-white text-[42px] text-left font-['Raleway'] font-normal">делаем проекты вместе</h3>
      
        <p className="text-white text-[24px] font-['Raleway'] font-normal leading-[120%]">
          Информационно-техническое сообщество Финуниверситета — 
          объединяем <br/>студентов, которые развиваются в IT, дизайне 
          и медиа через реальные задачи.
        </p>

        <p className="text-white text-[24px] font-['Raleway'] font-normal leading-[120%]">
          Здесь можно войти в действующий проект, предложить свой 
          или собрать команду для хакатона.
        </p>

        <Button 
          link={""} 
          text={"хочу вступить"} 
          icon={
            <img src="/static/icon/arrow-right-icon.svg" alt="Иконка: стрелка" className="w-[24px] h-[28px]"/>
          }
          styles={"rounded-[44px]"}
          textStyles={"text-[24px]"}
        />

        <Button 
          link={""} 
          text={"наши проекты"} 
          icon={
            <img src="/static/icon/arrow-right-icon.svg" alt="Иконка: стрелка" className="w-[24px] h-[28px]"/>
          }
          styles={"ml-[165px] rounded-[44px]"}
          textStyles={"text-[24px]"}
        />
      </div>

      <img src="/static/images/greetings-image.svg" alt="" className="absolute left-0 bottom-[-68px] w-[632px] h-[448px]"/>
    </section>
  )
}
