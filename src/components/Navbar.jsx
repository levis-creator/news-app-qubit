import { Button } from 'antd'
import React from 'react'
import { Menu } from 'lucide-react';


function Navbar() {
  const menuItems = [
    {
      title: "Home",
      path: "#"
    }, {
      title: "Apps",
      path: "#"
    }, {
      title: "Sevices",
      path: "#"
    }, {
      title: "Blog",
      path: "#"
    }, {
      title: "Business",
      path: "#"
    }, {
      title: "Download",
      path: "#"
    },
  ]
  return (
    <header>
      <nav className='sticky top-0 bg-white py-4 px-2 sm:px-6 shadow'>
        <div className='w-full flex justify-between'>
          <div className='text-red-500'>
            Bulletin
          </div>
          <div className='md:hidden'>
           <Button icon={<Menu/>} shape='circle'/>
          </div>
          <ul className='gap-3 hidden md:inline-flex'>
            {
              menuItems.map((item, i)=>(
                <li key={i}>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Navbar