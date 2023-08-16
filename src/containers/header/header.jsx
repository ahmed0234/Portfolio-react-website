import React from 'react'
import './header.css'
import Navbar from '../../components/navbar/navbar'
import Header__content from '../../components/header-content/header-content'

import '../../assets/blog02.png'

const Header = () => {
  return (
    <div className='header'>

            <Navbar />
            <Header__content />

            
    </div>
  )
}

export default Header
