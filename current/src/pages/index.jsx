import React from 'react'
import Footer from '../components/Footer'
import "../styles/App.css"
import "../styles/index.css"
import Marquee from "react-fast-marquee";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import CarouselText from '../components/CarouselText.tsx';
import { motion } from 'framer-motion';

//ICONS
import {
    IoLogoPython, IoLogoHtml5, IoLogoCss3,
    IoLogoGithub, IoIosTennisball
} from "react-icons/io"
import {
    IoCodeSlash
} from "react-icons/io5"
import {
    FaJava, FaReact
} from "react-icons/fa"
import {
    SiSolidity, SiJavascript, SiEthereum, SiVisualstudio,
    SiUnity, SiNextdotjs, SiDjango, SiWeb3Dotjs
} from "react-icons/si"
import {
    CgMusicSpeaker, CgMusic
} from "react-icons/cg"
import {
    GiSkateboard
} from "react-icons/gi"
import {
    MdDesignServices
} from "react-icons/md"
import {
    RiPlantFill
} from "react-icons/ri"


const variants = {
    visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

function index() {

    return (
        <div className='bg-white dark:bg-black ease-in duration-200'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="min-h-[1600px] lg:h-[110vh] xl:h-[130vh]">
                <ParallaxBannerLayer image="boston2.jpg" speed={-40} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <img src="headerpic.jpg" alt="My portrait." id="headerpic" className="w-[150px] relative mt-[100px] md:w-[200px] xl:w-[250px]" />

                    <h2 id="introtext" className='glitch text-center pt-[30px] pb-[30px] m:pt-[50px] m:pb-[50px] xl:pt-[100px] xl:pb-[100px] text-white text-[55px] dark:text-white ease-in duration-200 xl:text-[120px] lg:text-[80px] md:text-[60px] '>
                        Hey, I'm Ryan
                    </h2>

                    <div className="content bg-transparent ease-in duration-200">
                        <div className="landing-flex-container p-[30px] rounded-md md:mt-5 bg-[#ffffff77] dark:bg-[#00000055] ease-in duration-200">

                            <div className="landing-flex-item-left">
                                <div id="slantText" className="scale-[0.9] min-w-[450px] w-[100vw] md:w-[100%] translate-x-[-130px] sm:translate-x-[-60px] xl:mt-[30px] xl:scale-[1.25] ease-in duration-200">
                                    <div className="[-webkit-text-stroke:2px_black] perspective-text dark:[-webkit-text-stroke:2px_white]">
                                        <div className="perspective-line hover:text-black dark:hover:text-white ease-linear duration-200">
                                            <p>Coder</p>
                                            <p>Designer</p>
                                        </div>
                                        <div className="perspective-line hover:text-black dark:hover:text-white ease-in duration-200">
                                            <p>Musician</p>
                                            <p>Developer</p>
                                        </div>
                                        <div className="perspective-line hover:text-black dark:hover:text-white ease-in duration-200">
                                            <p>Teacher</p>
                                            <p>Producer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="landing-flex-item-right">
                                <p className="block ml-auto mr-auto w-[90%] m-[10px] text-[20px]">I'm a recent Boston University grad who studied computer science and music.</p>
                                <br />
                                <hr className="h-[2px] w-[55%] min-w-[225px] block ml-auto mr-auto border-none rounded-sm bg-black dark:bg-white ease-in duration-200" />
                                <div className="w-[50%] min-w-[225px] max-w-[500px] block ml-auto mr-auto pt-[10px] pb-[10px]">
                                    <div className="w-[100%] inline-flex justify-center items-center">
                                        <IoCodeSlash className="w-[100px] text-[50px] " />
                                        <img className="w-[125px] p-[10px]  ml-auto mr-auto" src="bulogo.png" alt="The Boston University logo." />
                                        <CgMusic className="w-[100px] text-[50px]" />
                                    </div>
                                </div>
                                <hr className="h-[2px] w-[55%] min-w-[225px] block ml-auto mr-auto border-none rounded-sm bg-black dark:bg-white ease-in duration-200" />
                                <br />
                                <p className="block ml-auto mr-auto w-[90%] m-[10px] text-[20px]">I’m a classically trained musician turned programmer from Las Vegas aiming to use my interests in technology to build and design websites, web apps, and software.</p>

                            </div>
                        </div>
                    </div>

                </ParallaxBannerLayer>

            </ParallaxBanner>

            <div className="fadeIn relative h-[30vh] mt-[-30vh] mb-[100px]  bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:to-black"></div>
            <section>
                <CarouselText baseVelocity={-2}>
                    <IoLogoPython className="marqueeicon text-[45px] xl:text-[60px] text-yellow-200" />
                    <IoLogoHtml5 className="marqueeicon text-[45px] xl:text-[60px] text-red-500" />
                    <IoLogoCss3 className="marqueeicon text-[45px] xl:text-[60px] text-blue-500" />
                    <SiJavascript className="marqueeicon text-[45px] xl:text-[60px] text-yellow-400" />
                    <FaReact className="marqueeicon text-[45px] xl:text-[60px] text-blue-400" />
                    <IoLogoGithub className="marqueeicon text-[45px] xl:text-[60px] text-purple-400" />
                </CarouselText>
            </section>

            <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] max-w-[55px] ml-[30px] mt-[50px] ease-linear duration-[50ms]">
                <img src="whiteasterisk.png" alt="" className="asterisk absolute opacity-0 dark:opacity-100 ease-in duration-200" aria-hidden="true" />
                <img src="blackasterisk.png" alt="" className="asterisk opacity-100 dark:opacity-0 ease-in duration-200" aria-hidden="true" />
            </Parallax>
            <div className="landing-flex-container p-[30px] rounded-md md:mt-5 bg-[#ffffff77] dark:bg-[#00000055] ease-in duration-200">

                <div className="landing-flex-item-left">
                    <Parallax speed={10} className="rounded-lg bg-opacity-50">
                        <h2 className='xl:ml-[10vw] font-[Takota] scale-y-[1.25] text-black text-[70px] dark:text-white ease-in duration-200 xl:text-[150px] lg:text-[80px] md:text-[60px] '>
                            MYSELF
                        </h2>
                    </Parallax>
                </div>

                <div className="landing-flex-item-right">
                    <motion.div
                        custom={100}
                        animate="visible"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 0.4, duration: 0.75 }
                        }}
                        viewport={{ once: true }}
                        variants={variants}>
                        <h2>hihihihihiihi</h2>
                    </motion.div>
                    <motion.div
                        custom={100}
                        animate="visible"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 0.8, duration: 0.75 }
                        }}
                        viewport={{ once: true }}
                        variants={variants}>
                        <h2>heyheyheyheyhey</h2>
                    </motion.div>
                    <motion.div
                        custom={100}
                        animate="visible"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 1.2, duration: 0.75 }
                        }}
                        viewport={{ once: true }}
                        variants={variants}>
                        <h2>hellohellohellohello</h2>
                    </motion.div>
                    <motion.div
                        custom={100}
                        animate="visible"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 1.6, duration: 0.75 }
                        }}
                        viewport={{ once: true }}
                        variants={variants}>
                        <h2>yoyoyoyoyoyoyo</h2>
                    </motion.div>
                </div>

            </div>

            <section>
                <CarouselText baseVelocity={-3}><h2 className="min-w-[45vw] ml-[30px]">Hi, I'm Ryan</h2></CarouselText>
            </section>

            <Marquee
                className='marquee'
                speed={50}
                gradient={false}
                direction={'right'}>
                <FaJava className="marqueeicon text-red-500" />
                <SiSolidity className="marqueeicon text-blue-400" />
                <SiUnity className="marqueeicon" />
                <SiEthereum className="marqueeicon text-purple-300" />
                <SiVisualstudio className="marqueeicon text-blue-400" />
                <SiNextdotjs className="marqueeicon" />
                <SiDjango className="marqueeicon text-green-500" />
            </Marquee>
            <Marquee
                className='marquee'
                speed={50}
                gradient={false}
                direction={'left'}>
                <SiWeb3Dotjs className="marqueeicon" />
                <CgMusicSpeaker className="marqueeicon" />
                <IoIosTennisball className="marqueeicon" />
                <GiSkateboard className="marqueeicon" />
                <MdDesignServices className="marqueeicon" />
                <RiPlantFill className="marqueeicon" />
            </Marquee>
            <Footer />
        </div >
    )
}

export default index