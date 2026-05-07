import React from 'react';

import Link from 'next/link';

import "@/styles/shared/button.css";

export default function Button({type, link, text, icon, styles, textStyles}) {
  return (
    <Link href={link} className={`button ${type} ${styles}`}>
      <div className="button-container">
        <button className="button-container-content">
          <p className={`button-container-content-text ${textStyles}`}>{text}</p>

          {icon}
        </button>

        <div className="button-container-shadow"/>
      </div>
    </Link>
  )
}
