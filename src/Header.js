import React from 'react'
import Link from './components/Link'
const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link href='/' className='item'>
        Accordion
      </Link>
      <Link href='/SearchWidget' className='item'>
        SearchWidget
      </Link>
      <Link href='/DropdownWidget' className='item'>
        DropdownWidget
      </Link>
      <Link href='Translate' className='item'>
        Translate
      </Link>
    </div>
  )
}
export default Header
