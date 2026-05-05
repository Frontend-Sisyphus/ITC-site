import React from 'react'

export default function Community() {
  return (
    <section className="relative grid gap-y-[76px] px-[120px] pt-[168px] pb-[148px] overflow-hidden">
      <h2 className="text-white text-[82px] text-left font-['Alientz'] font-normal leading-[96px] uppercase z-10">сообщество <br/>где делают проекты</h2>
    
      <div className="flex justify-start items-start gap-x-[101px]">
        <p className="max-w-[404px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
          Главное в ИТС — <strong>проектная деятельность</strong>. Ты вступаешь в сообщество 
          не ради абстрактного общения, а чтобы участвовать в создании 
          <b> реальных продуктов</b>. Собрать команду для хакатона, запустить бота, 
          которым будут пользоваться сотни студентов, сделать дизайн — вот 
          что мы делаем.
        </p>

        <p className="max-w-[392px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
          <strong>Есть идея? Предложи её.</strong> Если она крутая и жизнеспособная — соберёшь команду 
          внутри ИТС и реализуешь её при поддержке сообщества. А если пока нет своей 
          идеи — выберешь направление и будешь помогать в действующих проектах, 
          прокачивая навыки.
        </p>
      </div>

      <img src="/static/images/community-image.svg" alt="" className="absolute top-[85px] right-[-275px] w-[686px] h-[686px] z-[5]"/>
    </section>
  )
}
