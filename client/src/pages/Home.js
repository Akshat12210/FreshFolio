import React from 'react'
import Navbar from '../components/Navbar/HomeNavbar'
import Display from '../components/Display'
function Home() {
  return (
    <>
      <Navbar
        isSticky={true}
        isInvisibleOnTop={true}
        showSocial={false}
        showRegisterBtn={true}
      />
      {/* <div className='h-40'></div> */}
      {/* <hr /> */}
      <main>
      <Display />
      </main>
    </>

  )
}

export default Home