import React from 'react';

import '@/styles/widgets/community.css';

export default function Community() {
  return (
    <section className="community">
      <h2 className="section-title dark">сообщество <br/>где делают проекты</h2>
    
      <div className="community-textContainer">
        <p className="max-w-[404px] community-textContainer-text">
          Главное в ИТС — <strong>проектная деятельность</strong>. Ты вступаешь в сообщество 
          не ради абстрактного общения, а чтобы участвовать в создании 
          <b> реальных продуктов</b>. Собрать команду для хакатона, запустить бота, 
          которым будут пользоваться сотни студентов, сделать дизайн — вот 
          что мы делаем.
        </p>

        <p className="max-w-[392px] community-textContainer-text">
          <strong>Есть идея? Предложи её.</strong> Если она крутая и жизнеспособная — соберёшь команду 
          внутри ИТС и реализуешь её при поддержке сообщества. А если пока нет своей 
          идеи — выберешь направление и будешь помогать в действующих проектах, 
          прокачивая навыки.
        </p>
      </div>

      <img src="/static/images/community-image.svg" alt="" className="community-decorationImage"/>
    </section>
  )
}
