import React from 'react'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { MenuOutline, CloseOutline} from 'react-ionicons'
import joboa from '../images/joboa.jpg'

const Navbar = () => {
  let Links = [
    {name: "About Me", link:'#about'},
    {name: "Projects", link:'#projects'},
    {name: "Skills", link:'#skills'},
    {name: "Contact", link:'#contact'},
  ]

  let [open, setOpen] = useState(false)
  return (
    // main div: outer
    // <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='shadow-md w-full sticky top-0 left-0 z-50'>
      {/* inner div for the logo and nav items */}
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* inner div:1 for the logo */}
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-900'>
          <span className='text-3xl mr-1 pt-1'>
          {/* <PersonCircleOutline color={'black'} title={''} />  */}
          <img src={joboa} alt="joboa" className="h-8 pr-1 mx-auto rounded-3xl"/>
          </span><Link to='/'> J-Boamah</Link>
        </div>
        {/* breadcumbs */}
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden '>
          { open ?  <CloseOutline />:<MenuOutline />}
        </div>
        {/* nav items  */}
        {/* css: transition-all duration-500 ease-in md:opacity-100 opacity-0 */}
        <ul className={` bg-white md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] left-0 md:pl-0 md:w-auto w-full pl-9 ${open ? 'top-10': 'top-[-400px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                {/* <a href={link.link} className='text-white hover:text-blue-300 duration-500'>{link.name}</a> */}
                <Link to={link.link} className='text-gray-800 font-bold hover:text-blue-300 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      {/* <div className='bg-gray-800 h-0.5'></div> */}
    </div>
  )
}

export default Navbar