import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        {/* wrapper */}
        <div className="max-w-[90%] mx-auto py-2  w-full flex  ">

        {/* logo */}
        <div className="">
            <img className='rounded-full' src="./logo.png" width={80}  alt="logo" />
        </div>
        <ul className="">
            <l className="">
                <Link href={"/"}></Link>
            </l>
            <l className="">
                <Link href={"/"}></Link>
            </l>
            <l className="">
                <Link href={"/"}></Link>
            </l>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar