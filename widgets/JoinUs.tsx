import React from 'react';

import Link from 'next/link';

export default function JoinUs() {
  return (
    <section className="relative grid gap-y-[76px] py-[56px] px-[119px] w-full h-auto bg-[#e5e5e5] rounded-[20px]">
      <img src="/static/images/joinUs-image.svg" alt="" className="absolute right-[90px] top-[32px] w-[488px] h-[488px]"/>

      <h2 className="text-black text-[84px] text-left font-['Alientz'] font-normal uppercase z-10">присоединяйся</h2>

      <div className="grid gap-y-[32px] pl-[89px] max-w-[683px]">
        <p className="text-black text-[24px] text-left font-['Raleway'] font-normal">Хочешь участвовать в проектах, прокачивать навыки и 
          найти команду единомышленников? Расскажем, как устроено ИТС 
          и что нужно сделать, чтобы влиться.
        </p>

        <Link href="">
          <button className="flex justify-center items-center gap-x-[12px] py-[18px] px-[44px] bg-[#006CBC] rounded-[44px] cursor-pointer">
            <p className="text-white text-[24px] font-['Raleway'] font-normal uppercase">хочу вступить</p>

            <img src="/static/icon/arrow-right-icon.svg" alt="Иконка: стрелка" className="w-[24px] h-[28px]"/>
          </button>
        </Link>
      </div>
    </section>
  )
}
