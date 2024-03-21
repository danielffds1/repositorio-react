// Layout.tsx dentro da past src/components/Layout
import React from 'react'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
        <div style={{ background: "var(--bg-header)"}}>
            <Header />
            
        </div>
    </>
    
  )
}

export default Layout