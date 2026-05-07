import React from 'react';

import '@/styles/widgets/findYourWay.css';

export default function FindYourWay() {
  return (
    <section className="findYourWay">
      <img src="/static/images/findYourWay-image.svg" alt="" className="findYourWay-decorationImage"/>

      <h2 className="px-[120px] section-title dark">найди своё направление</h2>
    
      <div className="findYourWay-contentContainer">
        <div className="findYourWay-contentContainer-item">
          <h3 className="findYourWay-contentContainer-item-title">проектная деятельность</h3>

          <p className="findYourWay-contentContainer-item-description text-left">
            Разные направления разработки, создание Telegram-ботов, 
            3D-печать. Превращаем идеи в работающие продукты.
          </p>
        </div>

        <div className="findYourWay-contentContainer-item justify-items-end">
          <h3 className="findYourWay-contentContainer-item-title text-right">хакатоны и мероприятия</h3>

          <p className="findYourWay-contentContainer-item-description text-right">
            Участвуем и побеждаем. Это лучший способ проверить себя, 
            получить опыт командной разработки и пополнить портфолио.
          </p>
        </div>

        <div className="findYourWay-contentContainer-item">
          <h3 className="findYourWay-contentContainer-item-title">медиа</h3>

          <p className="findYourWay-contentContainer-item-description text-left">
            Дизайн, написание статей, фото — и видеосъемка мероприятий, 
            запись подкастов. Учимся упаковывать смыслы и создавать контент 
            о жизни ИТС и IT-сфере.
          </p>
        </div>

        <div className="findYourWay-contentContainer-item justify-items-end">
          <h3 className="findYourWay-contentContainer-item-title text-right">образование</h3>

          <p className="findYourWay-contentContainer-item-description text-right">
            Разбор инструментов, помощь с обучением. Делимся 
            знаниями внутри сообщества и поддерживаем 
            друг друга.
          </p>
        </div>
      </div>    
    </section>
  )
}
