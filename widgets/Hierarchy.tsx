import React from 'react';

import '@/styles/widgets/hieararchy.css';

export default function Hierarchy() {
  return (
    <section className="hierarchy">
      <img src="/static/images/hierarchy-image.svg" alt="" className="hierarchy-decorationImage"/>

      <h2 className="section-title dark text-right">как устроено ИТС</h2>
    
      <div className="hierarchy-contentContainer">
        <div className="hierarchy-contentContainer-item">
          <div className="hierarchy-contentContainer-item-wrapper">
            <div className="hierarchy-contentContainer-item-wrapper-content">
              <h3 className="hierarchy-contentContainer-item-wrapper-content-title">кураторство</h3>

              <p className="hierarchy-contentContainer-item-wrapper-content-description">
                У нас есть руководитель, который помогает с 
                организационными вопросами, выходом на официальный уровень вуза 
                и поддержкой проектов.
              </p>
            </div>

            <img src="/static/images/one-image.svg" alt="" className="w-[178px] h-[227px]"/>
          </div>
        </div>

        <div className="hierarchy-contentContainer-item">
          <div className="hierarchy-contentContainer-item-wrapper">
            <div className="hierarchy-contentContainer-item-wrapper-content">
              <h3 className="hierarchy-contentContainer-item-wrapper-content-title">структура</h3>

              <p className="hierarchy-contentContainer-item-wrapper-content-description">
                Внутри выделены руководители направлений. Они 
                координируют задачи, следят за сроками и помогают 
                участникам.
              </p>
            </div>

            <img src="/static/images/two-image.svg" alt="" className="w-[220px] h-[229px]"/>
          </div>
        </div>

        <div className="hierarchy-contentContainer-item">
          <div className="hierarchy-contentContainer-item-wrapper">
            <div className="hierarchy-contentContainer-item-wrapper-content">
              <h3 className="hierarchy-contentContainer-item-wrapper-content-title">правила</h3>

              <p className="hierarchy-contentContainer-item-wrapper-content-description">
                Общаемся уважительно, без агрессии и спама. 
                Распределяем задачи, назначаем ответственных. 
                Здесь каждый вкладывается в общее дело.
              </p>
            </div>

            <img src="/static/images/three-image.svg" alt="" className="w-[198px] h-[227px]"/>
          </div>
        </div>

        <div className="hierarchy-contentContainer-item">
          <div className="hierarchy-contentContainer-item-wrapper">
            <div className="hierarchy-contentContainer-item-wrapper-content">
              <h3 className="hierarchy-contentContainer-item-wrapper-content-title">признание</h3>

              <p className="hierarchy-contentContainer-item-wrapper-content-description">
                ИТС официально утверждено на уровне вуза — 
                это значит, у нас есть опора и перспективы 
                для роста.
              </p>
            </div>

            <img src="/static/images/four-image.svg" alt="" className="w-[243px] h-[243px]"/>
          </div>
        </div>
      </div>
    </section>
  )
}
