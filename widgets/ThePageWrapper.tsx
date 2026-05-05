import React from 'react'

import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

function ThePageWrapper({children}) {
  return (
    <>
      <TheHeader/>

      {children}

      <TheFooter/>
    </>
  )
}

export default ThePageWrapper;
