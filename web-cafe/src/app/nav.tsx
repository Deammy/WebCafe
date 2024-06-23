"use client";
import "./globals.css";
import { useState, useEffect } from "react"
import Image from 'next/image';
import Link from 'next/link'


export const Nav = () =>{
    const [on,setOn] = useState(false)
    const [cnt,SetCnt] = useState(0)

    const NAV = () => {

            return <nav className="h-full bg-neutral-400 font-extrabold fixed" id="nav-sidebar-move">
                <button className = "w-4 h-4 bg-black"onClick={()=>{
                    setOn(!on)
                }}>
                    </button>
            </nav>
        
        // else{
        //     return <nav className="w-20 h-full bg-neutral-400 from-neutral-800 font-extrabold fixed" >
        //             <button className = "w-4 h-4 bg-black"onClick={()=>{
        //                 setOn(!on)
        //             }}>
        //             </button>
        //         </nav>
        // }
    }
    useEffect(()=>{
        console.log("??")
        let nav_on_off = document.querySelectorAll("#nav-sidebar-move")
        if(on){
            nav_on_off.forEach((nav)=>{
                nav.classList.remove('w-12')
                nav.classList.add('w-52')
            })
        }
        else{
            nav_on_off.forEach((nav)=>{
                nav.classList.remove('w-52')
                nav.classList.add('w-12')
            })
        }

    },[on])


    return(<div className="z-50">

            <nav className="w-12 h-full bg-neutral-400 font-extrabold fixed transition-all ease-in-out shadow" id="nav-sidebar-move">
                <button className = "flex w-12 h-8 mt-5 mb-8 justify-center" onClick={()=>{
                    setOn(!on)
                }}>
                    <Image src = {require("./Icon/menu.png")}  alt="Picture of the year" className = "w-5 h-5 fill-white "/>
                </button>
                <Link href="/">
                    <div className = "grid w-12 h-12 justify-center hover:bg-gray-500 active:bg-white content-center hover:transition-all active:transition-none rounded-md">
                        <Image src = {require("./Icon/home-icon-silhouette.png")}  alt="Picture of the year" className = "w-5 h-5 fill-white "/>
                    </div>
                </Link>
                
                <Link href="/cafe">
                    <div className = "grid w-12 h-12 justify-center hover:bg-gray-500 active:bg-white content-center hover:transition-all active:transition-none rounded-md">
                        
                        <Image src = {require("./Icon/user.png")}  alt="Picture of the year" className = "w-5 h-5 fill-white "/>
                    </div>
                </Link>
            </nav>
    </div>
        
    )
}