import Header from 'components/Header'
import React from 'react'

const DefauftLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      {children}</div>
  )
}

export default DefauftLayout