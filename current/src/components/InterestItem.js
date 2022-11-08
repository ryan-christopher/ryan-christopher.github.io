import React from 'react'
import { motion } from 'framer-motion';

function MarqueeLink({ title, align }) {
    return (
        <div>
            <h3 className={`relative text-[20px] md:text-[25px]  uppercase justify-center items-center h-[50px] block ${align}
                             w-fit pl-[15px] pr-[15px] pt-[6px] md:pt-[1px] text-center mb-[5px] md:mb-[30px] dark:bg-[#171717] 
                             border-[1px] border-[#171717] dark:border-[#dfd5c1] bg-[#dfd5c1] z-[1] hover:rounded-[20px] ease-in duration-200`}>
                <span className='inline-block opacity-100 w-full text-center align-middle'>
                    {title}
                </span>
            </h3>
            <motion.div
                className={`${align}`}
                initial={{ width: "0px" }}
                whileInView={{
                    width: "100%",
                    transition: { delay: 0, duration: 0.75 }
                }}
                viewport={{ once: true }}>
                <hr className={`text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[100%] 
            block ml-auto mr-auto relative top-[-30px] md:top-[-55px] z-0 overflow-hidden`} />
            </motion.div>
        </div>
    )
}

export default MarqueeLink