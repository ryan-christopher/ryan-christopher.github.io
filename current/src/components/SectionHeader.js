import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import "../styles/App.css"

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
                    <h2 className='sectionHeader text-left w-fit overflow-hidden uppercase pr-[7px] mt-[50px] ml-[10px] sm:ml-[100px] lg:ml-[100px] xl:ml-[180px] rounded-[10px] 
                    font-["Room_205"] text-[60px] md:text-[70px] lg:text-[95px] xl:text-[125px] ease-in duration-200'>
                        {title}
                    </h2>
                </motion.div>
            </Parallax>

        </div>
    )
}

export default SectionHeader