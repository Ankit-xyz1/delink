"use client"


import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import randomstring from "randomstring"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import '@/app/globals.css'


const page = () => {
    const [url, seturl] = useState('')
    const [shortUrl, setshortUrl] = useState('')
    const [genrated, setgenrated] = useState("")


    const handleSubmit = async () => {
        if (url && shortUrl) {
            console.log(url)
            console.log(shortUrl)
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");


            const raw = JSON.stringify({
                "url": url,
                "shortenUrl": shortUrl
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("/api/genrate", requestOptions)
                .then((response) => response.json())
                .then((result) => console.log("saved" , result))
                .catch((error) => {
                    console.log(error);
                    return;
                } );
            setgenrated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
            seturl('')
            setshortUrl('')
            toast.success('Short link created sucessfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        } else {
            toast.error("Url and alias cant be empty", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="h-screen flex items-center justify-center w-full ubu">
                <div className="w-[90%] h-[90vh] p-5 mt-11 ">
                    <h1 className='text-2xl text-center md:text-4xl'>Shorten your Urls ,<span className='text-green-600'> Without login</span> or being
                        <span className='text-red-600'> tracked</span></h1>
                    <div className='xyz h-[40vh] flex items-center justify-center w-full flex-col'>
                        <input type="text"
                            onChange={(e) => { seturl(e.target.value) }}
                            value={url}
                            placeholder='Enter your link'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4'
                            name=""
                            id=""
                        />
                        <input type="text"
                            onChange={(e) => { setshortUrl(e.target.value) }}
                            value={shortUrl}
                            placeholder='Enter prefer alias'
                            className='mt-4 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            name=""
                            id=""
                        />
                        <span className='flex gap-5 items-center justify-center mt-4 w-full
                        '>

                            <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 w-1/8'
                                onClick={() => { setshortUrl(randomstring.generate(7)) }}
                            >Random-Alias</button>
                            <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 w-1/8'
                                onClick={() => { handleSubmit() }}
                            >Shorten</button>
                        </span>
                    </div>
                    <div className='h-10 w-full mt-5 flex items-center justify-center'>
                        {genrated && <>
                            <Link target='_blank' href={genrated}><code>{genrated}</code></Link>
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
