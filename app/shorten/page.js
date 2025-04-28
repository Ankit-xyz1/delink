"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import randomstring from "randomstring"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import '@/app/globals.css'
import { Loader } from 'lucide-react'


const page = () => {
    const [url, seturl] = useState('')
    const [shortUrl, setshortUrl] = useState('')
    const [genrated, setgenrated] = useState("")
    const [isLoading, setisLoading] = useState(false)


    const handleSubmit = async () => {
        setisLoading(true)
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

            let data = await fetch("/api/genrate", requestOptions)
            let response = await data.json()
            console.log("trying......" , response);
            if(!response.success){
                console.log("not saved")
                toast.error('This link already exisit', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
                setgenrated(`Try using Random alias`)
                setisLoading(false)
                return;
            }
        
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
        setisLoading(false)
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
            <div className="h-screen flex items-center justify-center w-full bg-zinc-950">
                <div className="w-[90%] h-[90vh] p-5 mt-11 ">
                    <h1 className='text-2xl text-center md:text-4xl'>Shorten your Urls ,<span className='text-green-600'> Without login</span> or being
                        <span className='text-red-600'> tracked</span></h1>
                    <div className='xyz h-[40vh] flex items-center justify-center w-full flex-col'>
                        <input type="text"
                            onChange={(e) => { seturl(e.target.value) }}
                            value={url}
                            placeholder='Enter your link'
                            className='text-white tracking-wider bg-zinc-950 border-[1px] border-zinc-800 outline-none text-sm rounded block w-[80%] md:w-1/2 p-2.5 mt-4'
                            name=""
                            id=""
                        />
                        <input type="text"
                            onChange={(e) => { setshortUrl(e.target.value) }}
                            value={shortUrl}
                            placeholder='Enter prefer alias'
                            className='text-zinc-300 bg-zinc-950 border-[1px] border-zinc-800 outline-none text-sm rounded block w-[80%] md:w-1/2 p-2.5 mt-4'
                            name=""
                            id=""
                        />
                        <span className='flex gap-5 items-center justify-center mt-4 w-full
                        '>

                            <button className='text-white bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 w-1/8'
                                onClick={() => { setshortUrl(randomstring.generate(7)) }}
                            >Random-Alias</button>
                            <button className='flex  items-center justify-center gap-1 text-white bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 w-1/8'
                                onClick={() => { handleSubmit() }}
                            >{isLoading?<Loader size={18} className='animate-spin'/>:null}Shorten</button>
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
