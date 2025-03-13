'use client'
import React from "react"
import Link from "next/link"



export default function Navbar(){
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return(
  <>        
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-50">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-auto lg:static relative flex justify-between">
          <Link href = "/" className="flex font-bold text-xl">
            <img src="/Bingo.ico"/>
              BingBingHotChicken
          </Link>
          <button
            onClick={()=> setNavbarOpen(!navbarOpen)}
            type="button"
          >
          </button>
        </div>
      </div>
      <ul className="hidden items-center justify-center gap-6 md:flex">
        <li>
          <Link href="#">Locations</Link>
        </li>
        <li>
          <Link href="#" className="">Menus</Link>
        </li>
      </ul>
    </nav>
  </>
    )
}