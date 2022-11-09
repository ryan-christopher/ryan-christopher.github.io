import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

function SectionHeader({ title }) {
    return (
        <div>
            <Parallax speed={5} className="rounded-lg bg-opacity-50">
                <motion.div
                    initial={{ opacity: 0, transform: "translateX(-300px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateX(0px)",
                        transition: { duration: 0.7 }
                    }}
                    viewport={{ once: true }}>
                    <h2 className='text-left w-fit overflow-hidden uppercase pr-[7px] mt-[50px] ml-[20px] sm:ml-[100px] md:ml-[200px] rounded-[10px] 
                    font-[Takota] text-[#171717] text-[55px] md:text-[60px] lg:text-[85px] xl:text-[125px] dark:text-[#f9f5e9] ease-in duration-200'>
                        {title}
                    </h2>
                </motion.div>
            </Parallax>

        </div>
    )
}

export default SectionHeader