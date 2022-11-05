import React from 'react'
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

import { SiJavascript, SiUnity, SiScratch, SiFlask, SiTailwindcss } from "react-icons/si"
import { IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoGithub } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { AiFillApi } from "react-icons/ai";

const icons = [<IoLogoHtml5 className=" text-red-500" />, <SiTailwindcss className=" text-blue-400" />,
<SiJavascript className=" text-yellow-400" />, <FaReact className=" text-blue-400" />,
<IoLogoGithub className=" text-purple-400" />, <IoLogoPython className=" text-yellow-300" />,
<SiScratch className=" text-orange-400" />, <IoLogoHtml5 className=" text-red-500" />,
<SiUnity className=" text-black dark:text-white" />, <SiJavascript className=" text-yellow-400" />,
<FaReact className=" text-blue-400" />, <SiFlask className=" text-black dark:text-white" />, <IoLogoHtml5 className=" text-red-500" />,
<AiFillApi className="text-black dark:text-white" />, <IoLogoCss3 className=" text-blue-500" />]

function ProjectCard({ name, nameSize, phrase, description, iconList, imageUrl, borderCol, marqueeLink, marqueeText }) {
    return (
        <div>
            <motion.div
                className='w-[100%] xl:w-[29vw] mt-[25px] mb-[25px] min-h-[500px] flex-col justify-center text-center rounded-[10px] 
                            bg-[#e7e2d664] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-md'
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: { delay: 0, duration: 0.7 }
                }}
                viewport={{ once: true }}>
                <h3 className={`${nameSize} uppercase font-['Atami'] pt-[20px]`}>{name}</h3>
                <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[75%] block ml-auto mr-auto pb-[10px]' />
                <p className='text-[20px]'>{phrase}</p>
                <span className='mt-[20px] w-[74%] flex ml-[13%] justify-between text-[30px]'>
                    {icons[iconList[0]]}
                    {icons[iconList[1]]}
                    {icons[iconList[2]]}
                    {icons[iconList[3]]}
                    {icons[iconList[4]]}
                </span>
                <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[75%] block ml-auto mr-auto mt-[20px]' />
                <p className='text-[18px] w-[85%] text-justify block ml-auto mr-auto mt-[20px] leading-[28px] xl:h-[300px]'>
                    {description}</p>
                <img src={imageUrl} alt="Landing page of this website."
                    className={`w-[65%] min-w-[200px] max-w-[400px] block ml-auto mr-auto mt-[30px] mb-[30px] xl:mb-[60px] rounded-md border-2 ${borderCol}`} />
                <a href={marqueeLink} target={"_blank"} rel="noreferrer"
                    className={`relative ml-[50%] translate-x-[-125px] text-[30px] uppercase flex justify-center items-center h-[50px] 
                                border-2 ${borderCol} rounded-[50px] w-[250px] text-center mb-[30px]`}>
                    <span className='inline-block align-baseline text-center opacity-100 hover:opacity-0 ease-linear duration-200'>Check it out</span>
                    <Marquee
                        className='!absolute top-0 left-0 w-[100%] !h-[100%] rounded-[50px] bg-[#171717] text-[#f9f5e9] opacity-0 hover:opacity-100 ease-linear duration-150'
                        speed={125}
                        gradient={false}
                        direction={'left'}>
                        <span className='pl-[15px] pr-[15px]'>{marqueeText}</span>
                        <span className='pl-[15px] pr-[15px]'>{marqueeText}</span>
                    </Marquee>
                </a>
                <br />
            </motion.div>
        </div>
    )
}

export default ProjectCard