import React from 'react'

import Link from 'next/link'
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai' 

import { Cart } from "./"
import { useStateContext } from '@/context/StateContext'

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          <Image
            src="../public/logosound.png"
            width={200}
            height={100}
            alt="logo"
          />
        </Link>
        
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar