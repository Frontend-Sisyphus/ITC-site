import React from 'react';

import Link from "next/link";

import "@/styles/widgets/header.css";

export default function TheHeader() {
  return (
    <header className="header">
      <nav>
        <Link href="" className="header-nav-link">
          <p>вступить</p>
        </Link>

        <Link href="" className="header-nav-link">
          <p>мы в телеграм</p>
          
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.228 4.862s1.503-.587 1.378.837c-.042.587-.418 2.64-.71 4.86l-1.003 6.576s-.084.964-.836 1.131c-.751.168-1.88-.586-2.088-.754-.168-.126-3.134-2.01-4.178-2.932-.293-.252-.627-.754.042-1.34l4.386-4.19c.502-.503 1.003-1.676-1.086-.251l-5.849 3.979s-.668.42-1.922.042l-2.715-.838s-1.003-.628.71-1.256c4.178-1.97 9.317-3.98 13.87-5.865" fill="#fff"/></svg>
        </Link>
      </nav>

      <img src="/static/logo/itc-logo.svg" alt="Логотип: ИТС" className="header-logo"/>
    </header>
  )
}
