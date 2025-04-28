import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>


            <footer className=" rounded-lg shadow m-4 bg-zinc-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025  
                        <Link href="/" className="hover:underline"> DeLink</Link>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="https://www.ankit.club" className="hover:underline me-4 md:me-6  hover:text-zinc-200 transition-all ease-in-out duration-300">About</Link>
                        </li>
                        <li>
                            <Link href="https://www.ankit.club" className="hover:underline hover:text-zinc-200 transition-all ease-in-out duration-300">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer
