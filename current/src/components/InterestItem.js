import React from 'react'
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

function MarqueeLink({ title, align }) {
    return (
        <div>
            <motion.div
                className='mt-[10px]'
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: { delay: 0, duration: 0.5 }
                }}
                viewport={{ once: true }}>
                <h3 className={`relative text-[20px] md:text-[25px]  uppercase justify-center items-center h-[50px] block ${align}
                             w-fit pl-[15px] pr-[15px] pt-[6px] md:pt-[1px] text-center mb-[5px] md:mb-[30px] dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] bg-[#dfd5c1] z-[1]`}>
                    <span className='inline-block opacity-100 hover:opacity-0 w-full text-center align-middle
                        ease-linear duration-200'>
                        {title}
                    </span>
                    <Marquee
                        className='!absolute top-0 left-0 w-[100%] !h-[100%] bg-[#171717] text-[#f9f5e9] opacity-0 hover:opacity-100 ease-linear duration-150'
                        speed={125}
                        gradient={false}
                        direction={'left'}>
                        <span className='pl-[20px] pr-[20px]'>{title}</span>
                        <span className='pl-[20px] pr-[20px]'>{title}</span>
                    </Marquee>
                </h3>
                <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[100%] 
            block ml-auto mr-auto relative top-[-30px] md:top-[-55px] z-0 overflow-hidden' />
            </motion.div>
        </div>
    )
}

export default MarqueeLink