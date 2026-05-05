import React from 'react'

export default function Hierarchy() {
  return (
    <section className="relative grid gap-y-[10px] px-[120px]">
      <img src="/static/images/hierarchy-image.svg" alt="" className="absolute top-[-118px] left-[-20px] w-[572px] h-[572px] z-5"/>

      <h2 className="text-white text-[84px] text-right font-['Alientz'] font-normal uppercase z-10">как устроено ИТС</h2>
    
      <div className="grid gap-y-[4px] z-10">
        <div className="flex justify-between items-center py-[36px] pl-[24px] pr-[75px] bg-[#080808] border-x-[2px] border-t-[2px] border-[#098ced] rounded-t-[24px]">
          <div className="grid gap-y-[96px]">
            <h3 className="text-white text-[48px] text-left font-['Raleway'] font-normal uppercase">кураторство</h3>

            <p className="max-w-[570px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
              У нас есть руководитель, который помогает с 
              организационными вопросами, выходом на официальный уровень вуза 
              и поддержкой проектов.
            </p>
          </div>

          <img src="/static/images/one-image.svg" alt="" className="w-[178px] h-[227px]"/>
        </div>

        <div className="flex justify-between items-center py-[36px] pl-[24px] pr-[75px] bg-[#080808] border-x-[2px] border-t-[2px] border-[#098ced] rounded-t-[24px]">
          <div className="grid gap-y-[96px]">
            <h3 className="text-white text-[48px] text-left font-['Raleway'] font-normal uppercase">структура</h3>

            <p className="max-w-[570px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
              Внутри выделены руководители направлений. Они 
              координируют задачи, следят за сроками и помогают 
              участникам.
            </p>
          </div>

          <img src="/static/images/two-image.svg" alt="" className="w-[220px] h-[229px]"/>
        </div>

        <div className="flex justify-between items-center py-[36px] pl-[24px] pr-[75px] bg-[#080808] border-x-[2px] border-t-[2px] border-[#098ced] rounded-t-[24px]">
          <div className="grid gap-y-[96px]">
            <h3 className="text-white text-[48px] text-left font-['Raleway'] font-normal uppercase">правила</h3>

            <p className="max-w-[570px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
              Общаемся уважительно, без агрессии и спама. 
              Распределяем задачи, назначаем ответственных. 
              Здесь каждый вкладывается в общее дело.
            </p>
          </div>

          <img src="/static/images/three-image.svg" alt="" className="w-[198px] h-[227px]"/>
        </div>

        <div className="flex justify-between items-center py-[36px] pl-[24px] pr-[75px] bg-[#080808] border-x-[2px] border-t-[2px] border-[#098ced] rounded-t-[24px]">
          <div className="grid gap-y-[96px]">
            <h3 className="text-white text-[48px] text-left font-['Raleway'] font-normal uppercase">признание</h3>

            <p className="max-w-[570px] text-white text-[24px] text-left font-['Raleway'] font-normal leading-[120%]">
              ИТС официально утверждено на уровне вуза — 
              это значит, у нас есть опора и перспективы 
              для роста.
            </p>
          </div>

          <img src="/static/images/four-image.svg" alt="" className="w-[243px] h-[243px]"/>
        </div>
      </div>
    </section>
  )
}
