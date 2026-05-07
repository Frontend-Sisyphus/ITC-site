import React from 'react';

import Link from 'next/link';

import "@/styles/shared/button.css";

interface ButtonProps {
  type: string;        
  link: string;
  text: string;
  icon?: React.ReactNode;  
  styles?: string;        
  textStyles?: string;     
}

export default function Button({type, link, text, icon, styles, textStyles}: ButtonProps) {
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
