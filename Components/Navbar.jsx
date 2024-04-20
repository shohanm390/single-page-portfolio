import React from 'react'

const Navbar = () => {
  return (
    <div className='flex lg:justify-between lg:px-36 items-center lg:mt-10'>
      <a href="#" className='text-3xl font-semibold font-mono'>shohan</a>
      <ul className='flex gap-x-7 lg:text-2xl'>
        <li>
            <a href="#">
            <i className="fa-brands fa-github"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa-brands fa-linkedin"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa-brands fa-dribbble"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
