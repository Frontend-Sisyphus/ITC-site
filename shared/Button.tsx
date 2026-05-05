import React from 'react';

import Link from 'next/link';

import "@/styles/shared/button.css";

export default function Button({link, text, icon, styles, textStyles}) {
  return (
    <Link href={link} className={`button ${styles}`}>
      <button className="button-container">
        <p className={`button-container-text ${textStyles}`}>{text}</p>

        {icon}
      </button>
    </Link>
  )
}
