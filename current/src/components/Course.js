import React from 'react'

import { SiJavascript, SiHiveBlockchain, SiSqlite } from "react-icons/si"
import { IoLogoPython, IoLogoCss3 } from "react-icons/io"


const icons = [
    <SiJavascript className="text-yellow-400" />,
    <IoLogoPython className="text-yellow-300" />,
    <IoLogoCss3 className="text-blue-500" />,
    <SiHiveBlockchain className="dark:text-white text-black" />,
    <SiSqlite className="dark:text-white text-black" />
]

function Course({ title, from, iconNum, link }) {
    return (
        <div className="w-[250px] md:w-[350px] h-[375px] ml-[5vw] mr-[5vw] rounded-[10px] 
        bg-[#e7e2d688] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-md border-[1px] 
        border-[#171717]">
            <div className='p-[15px]'>
                <h2 className="font-['Room_205'] text-[30px] md:text-[30px]">{title}</h2>
                <p className='mt-[10px]'>from {from}</p>
                <div className='relative top-[40px] left-0 w-[100%]'>
                    <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[55%] block ml-auto mr-auto' />
                    <span className='mt-[20px] flex justify-center text-[40px]'>
                        {icons[iconNum]}
                    </span>
                    <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[55%] block ml-auto mr-auto mt-[20px]' />
                </div>
            </div>

            <a className='block relative top-[70px] rounded-b-[9px] italic font-["Room_205"] 
            text-[25px] p-[15px] !w-[100%] text-center dark:bg-[#dfd5c1] bg-[#2f2f2f] 
            text-[#e6e0d3] dark:text-[#171717] border-[#171717] hover:text-[30px] ease-in duration-150'
                href={link} rel="noreferrer" target='_blank'>
                View
            </a>
        </div>
    )
}

export default Course