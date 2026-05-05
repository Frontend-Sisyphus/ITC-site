import React from 'react';

import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="relative flex justify-end items-center gap-x-[84px] pt-[20px] pr-[120px] w-full h-[53px] bg-transparent">
      <nav className="flex justify-end items-center gap-x-[42px]">
        <Link href="">
          <p className="text-[18px] font-['Raleway'] font-normal uppercase">вступить</p></Link>

        <Link href="" className="flex items-center gap-x-[9px]">
          <p className="text-[18px] font-['Raleway'] font-normal uppercase">мы в телеграм</p>
          
          <img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>
        </Link>
      </nav>

      <img src="/static/logo/itc-logo.svg" alt="Логотип: ИТС" className="w-[66px] h-[66px]"/>
    </header>
  )
}
