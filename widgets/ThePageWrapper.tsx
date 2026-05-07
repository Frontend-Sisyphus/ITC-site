import React from 'react'

import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

interface PageWrapperProps {
  children: React.ReactNode;
}

function ThePageWrapper({children}: PageWrapperProps) {
  return (
    <>
      <TheHeader/>

      {children}

      <TheFooter/>
    </>
  )
}

export default ThePageWrapper;
