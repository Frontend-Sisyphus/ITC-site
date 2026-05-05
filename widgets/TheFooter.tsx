import React from 'react';

import Link from 'next/link';

import "@/styles/widgets/footer.css";
import Button from '@/shared/Button';

export default function TheFooter() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-left-logoContainer">
          <Link href="">
            <img src="/static/logo/fin-logo.svg" alt="Логотип: Финансовый университет"/>
          </Link>

          <img src="/static/logo/itc-logo.svg" alt="Логотип: ИТС"/>
        </div>

        <div className="footer-left-linksContainer">
          <Link href="" className="footer-left-linksContainer-link">Утверждено приказом</Link>
        
          <Link href="" className="footer-left-linksContainer-link">Политика конфиденциальности</Link>
        </div>
      </div>

      <p className="footer-copyright">© ИТС {new Date().getFullYear()}</p>

      <div className="footer-right">
        <Button link={""} text={"ИТС публикации"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={"rounded-[44px]"} textStyles={"text-[18px]"}/>

        <Button link={""} text={"Бот помощник"} icon={<img src="/static/icon/tg-icon.svg" alt="Логотип: Telegram" className="w-[21px] h-[21px]"/>} styles={"rounded-[44px]"} textStyles={"text-[18px]"}/>
      </div>
    </footer>
  )
}
