'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [Navopen, setNavOpen] = useState(true)
    return (
        <>
            <nav>


                <nav className="bg-zinc-950">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image alt='logo' src={'logo.svg'} width={30} height={30} />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">DeLink</span>
                        </Link>
                        
                        <button data-collapse-toggle="navbar-default"
                        onClick={()=>{setNavOpen(!Navopen)}}
                        type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        {Navopen?
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                                <li>
                                    <Link href="/" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="https://www.ankit.club" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                                </li>
                                <li>
                                    <Link href="/shorten" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shorten</Link>
                                </li>
                               
                                <li>
                                    <Link href="https://www.ankit.club" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                                </li>
                            </ul>
                        </div>:<div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link href="/" className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" onClick={()=>{setNavOpen(!Navopen)}}>Home</Link>
                                </li>
                                <li>
                                    <Link href="https://www.ankit.club" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " onClick={()=>{setNavOpen(!Navopen)}}
                                    >About</Link>
                                </li>
                                <li>
                                    <Link href="/shorten" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=>{setNavOpen(!Navopen)}}
                                    >Shorten</Link>
                                </li>
                               
                                <li>
                                    <Link href="https://www.ankit.club" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=>{setNavOpen(!Navopen)}}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </nav>
                <div className='w-full h-[1px] bg-zinc-700'></div>

            </nav>
        </>
    )
}

export default Navbar
