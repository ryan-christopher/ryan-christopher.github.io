import React from 'react'
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

function MarqueeLink({ title, link }) {
    return (
        <div>
            <motion.div
                className='lg:m-[10px]'
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: { delay: 0, duration: 0.5 }
                }}
                viewport={{ once: true }}>
                <a href={link} target={"_blank"} rel="noreferrer"
                    className='relative text-[20px] md:text-[25px]  uppercase flex justify-center items-center h-[50px] 
                                border-2 border-[#171717] dark:border-[#dfd5c1] rounded-[50px] w-fit pl-[15px] pr-[15px] text-center mb-[5px] md:mb-[30px]'>
                    <span className='inline-block align-baseline text-center opacity-100 hover:opacity-0 
                        ease-linear duration-200'>
                        {title}
                    </span>
                    <Marquee
                        className='!absolute top-0 left-0 w-[100%] !h-[100%] rounded-[50px] bg-[#171717] text-[#f9f5e9] opacity-0 hover:opacity-100 ease-linear duration-150'
                        speed={125}
                        gradient={false}
                        direction={'left'}>
                        <span className='pl-[15px] pr-[15px]'>{title}</span>
                        <span className='pl-[15px] pr-[15px]'>{title}</span>
                    </Marquee>
                </a>
            </motion.div>
        </div>
    )
}

export default MarqueeLink