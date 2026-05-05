import React from 'react'

export default function FindYourWay() {
  return (
    <section className="relative grid gap-y-[76px]">
      <img src="/static/images/findYourWay-image.svg" alt="" className="absolute top-[-370px] left-[-245px] w-[1021px] h-[1020px] z-[5]"/>

      <h2 className="px-[120px] text-white text-[84px] text-right font-['Alientz'] font-normal leading-[96px] uppercase z-10">найди своё направление</h2>
    
      <div className="z-10">
        <div className="grid gap-y-[8px] py-[28px] px-[120px] bg-[#080808] border-y-[1px] border-white z-10">
          <h3 className="text-white text-[48px] font-['Raleway'] font-normal uppercase">проектная деятельность</h3>

          <p className="max-w-[594px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
            Разные направления разработки, создание Telegram-ботов, 
            3D-печать. Превращаем идеи в работающие продукты.
          </p>
        </div>

        <div className="grid justify-items-end gap-y-[8px] py-[28px] px-[120px] bg-[#080808] border-y-[1px] border-white">
          <h3 className="text-white text-[48px] text-right font-['Raleway'] font-normal uppercase">хакатоны и мероприятия</h3>

          <p className="max-w-[594px] text-white text-right text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
            Участвуем и побеждаем. Это лучший способ проверить себя, 
            получить опыт командной разработки и пополнить портфолио.
          </p>
        </div>

        <div className="grid gap-y-[8px] py-[28px] px-[120px] bg-[#080808] border-y-[1px] border-white">
          <h3 className="text-white text-[48px] font-['Raleway'] font-normal uppercase">медиа</h3>

          <p className="max-w-[594px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
            Дизайн, написание статей, фото — и видеосъемка мероприятий, 
            запись подкастов. Учимся упаковывать смыслы и создавать контент 
            о жизни ИТС и IT-сфере.
          </p>
        </div>

        <div className="grid justify-items-end gap-y-[8px] py-[28px] px-[120px] bg-[#080808] border-y-[1px] border-white">
          <h3 className="text-white text-[48px] text-right font-['Raleway'] font-normal uppercase">образование</h3>

          <p className="max-w-[594px] text-white text-right text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
            Разбор инструментов, помощь с обучением. Делимся 
            знаниями внутри сообщества и поддерживаем 
            друг друга.
          </p>
        </div>
      </div>    
    </section>
  )
}
