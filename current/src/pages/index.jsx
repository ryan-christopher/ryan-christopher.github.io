import React from 'react'
import Footer from '../components/Footer'
import "../styles/App.css"
import "../styles/index.css"
import Marquee from "react-fast-marquee";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import CarouselText from '../components/CarouselText.tsx';
import { motion } from 'framer-motion';

//3D MODEL TEST
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from 'react'

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

const CoffeeCup = () => {
    const fbx = useLoader(FBXLoader, "./coffee_cup_fbx/Paper_coffee_cup.fbx");

    fbx.rotation.x = 0
    fbx.rotation.z = 0

    console.log(fbx.rotation.x)
    fbx.rotation.x += 0.1;
    console.log(fbx.rotation.z)
    fbx.rotation.z -= 0.05

    useFrame(() => {
        // This function runs at the native refresh rate inside of a shared render-loop
        fbx.rotation.y -= 0.0075
    })

    return <primitive object={fbx} scale={0.01} />;
};





function index() {

    return (
        <div className='bg-[#f9f5e9] dark:bg-[#171717] ease-in duration-200'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="min-h-[1500px] lg:h-[110vh] xl:h-[115vh] max-w-[100vw]">
                <ParallaxBannerLayer image="boston2.jpg" speed={-40} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <img src="headerpic.jpg" alt="My portrait." id="headerpic" className="w-[150px] relative mt-[100px] md:w-[200px] xl:w-[250px]" />


                    <div className="content w-[92vw] pb-[30px] rounded-md mt-[30px] md:mt-5 bg-[#ffffff77] dark:bg-[#00000055] ease-in duration-200">
                        <h2 id="introtext" className='glitch text-center pt-[20px] pb-[20px] m:pt-[50px] m:pb-[50px] xl:pt-[100px] xl:pb-[100px] 
                    text-[#171717] text-[55px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[120px] lg:text-[80px] md:text-[60px] '>
                            Hey, I'm Ryan
                        </h2>

                        <div className="landing-flex-container p-[30px] rounded-md md:mt-5 ease-in duration-200">

                            <div className="landing-flex-item-left">
                                <div id="slantText" className="scale-[0.9] min-w-[450px] w-[100vw] md:w-[100%] translate-x-[-130px] sm:translate-x-[-60px] 
                                xl:mt-[30px] xl:scale-[1.25] ease-in duration-200">
                                    <div className="[-webkit-text-stroke:2px_#171717] perspective-text dark:[-webkit-text-stroke:2px_#f9f5e9]">
                                        <div className="perspective-line hover:text-[#171717] dark:hover:text-[#f9f5e9] ease-linear duration-200">
                                            <p>Coder</p>
                                            <p>Designer</p>
                                        </div>
                                        <div className="perspective-line hover:text-[#171717] dark:hover:text-[#f9f5e9] ease-in duration-200">
                                            <p>Musician</p>
                                            <p>Developer</p>
                                        </div>
                                        <div className="perspective-line hover:text-[#171717] dark:hover:text-[#f9f5e9] ease-in duration-200">
                                            <p>Teacher</p>
                                            <p>Producer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="landing-flex-item-right">
                                <p className="block ml-auto mr-auto w-[95%] lg:w-[80%] m-[10px] text-[20px]">I'm a recent Boston University grad who studied computer science and music.</p>
                                <br />
                                <hr className="h-[2px] w-[55%] min-w-[225px] block ml-auto mr-auto border-none rounded-sm bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200" />
                                <div className="w-[50%] min-w-[225px] max-w-[500px] block ml-auto mr-auto pt-[10px] pb-[10px]">
                                    <div className="w-[100%] inline-flex justify-center items-center">
                                        <IoCodeSlash className="w-[100px] text-[50px] " />
                                        <img className="w-[125px] p-[10px]  ml-auto mr-auto" src="bulogo.png" alt="The Boston University logo." />
                                        <CgMusic className="w-[100px] text-[50px]" />
                                    </div>
                                </div>
                                <hr className="h-[2px] w-[55%] min-w-[225px] block ml-auto mr-auto border-none rounded-sm bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200" />
                                <br />
                                <p className="block ml-auto mr-auto w-[95%] lg:w-[80%] m-[10px] text-[20px]">
                                    I’m a classically trained musician turned programmer from Las Vegas aiming to use my
                                    interests in technology to build and design websites, web apps, and software.</p>

                            </div>
                        </div>
                    </div>

                    <span className='block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                        <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[50px] ease-linear duration-[50ms] mr-[5vw] ml-[5vw]">
                            <img src="whiteasterisk.png" alt="" className="asterisk absolute opacity-0 dark:opacity-100 ease-in duration-200" aria-hidden="true" />
                            <img src="blackasterisk.png" alt="" className="asterisk opacity-100 dark:opacity-0 ease-in duration-200" aria-hidden="true" />
                        </Parallax>
                        <Parallax rotate={[0, -360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[50px] ease-linear duration-[50ms] mr-[5vw] ml-[5vw]">
                            <img src="whiteasterisk.png" alt="" className="asterisk absolute opacity-0 dark:opacity-100 ease-in duration-200" aria-hidden="true" />
                            <img src="blackasterisk.png" alt="" className="asterisk opacity-100 dark:opacity-0 ease-in duration-200" aria-hidden="true" />
                        </Parallax>
                        <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[50px] ease-linear duration-[50ms] mr-[5vw] ml-[5vw]">
                            <img src="whiteasterisk.png" alt="" className="asterisk absolute opacity-0 dark:opacity-100 ease-in duration-200" aria-hidden="true" />
                            <img src="blackasterisk.png" alt="" className="asterisk opacity-100 dark:opacity-0 ease-in duration-200" aria-hidden="true" />
                        </Parallax>
                    </span>

                </ParallaxBannerLayer>
            </ParallaxBanner>


            {/*
            <div className="fadeIn relative h-[20vh] mt-[-20vh] mb-[100px]  bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:to-[#171717]"></div>
    */}



            <section className='mt-[25px] pb-[100px]'>
                <CarouselText baseVelocity={-2}>
                    <IoLogoPython className="marqueeicon text-[45px] xl:text-[60px] text-yellow-200" />
                    <IoLogoHtml5 className="marqueeicon text-[45px] xl:text-[60px] text-red-500" />
                    <IoLogoCss3 className="marqueeicon text-[45px] xl:text-[60px] text-blue-500" />
                    <SiJavascript className="marqueeicon text-[45px] xl:text-[60px] text-yellow-400" />
                    <FaReact className="marqueeicon text-[45px] xl:text-[60px] text-blue-400" />
                    <IoLogoGithub className="marqueeicon text-[45px] xl:text-[60px] text-purple-400" />
                </CarouselText>
            </section>

            <Canvas className='!w-[250px] !h-[250px] lg:!w-[400px] lg:!h-[400px] block ml-auto mr-auto'>
                <ambientLight intensity={1} />
                <directionalLight color="#bbbbbb" position={[6, 3, 3]} />
                <Suspense fallback={null}>
                    <CoffeeCup />
                </Suspense>
            </Canvas>

            <Parallax speed={10} className="rounded-lg bg-opacity-50">

                <motion.div
                    custom={100}
                    animate="visible"
                    initial={{ opacity: 0, transform: "translateX(-300px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateX(0px)",
                        transition: { duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2 className='text-right overflow-hidden uppercase w-[50vw] min-w-[400px] l:ml-[-100px] rounded-[10px] 
                    font-[Takota] scale-y-[1.25] text-[#171717] text-[60px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[100px] lg:text-[80px] md:text-[60px] '>
                        A bit about me
                    </h2>
                </motion.div>
            </Parallax>
            {/*
            <Parallax speed={5} >
            */}
            <section className='block ml-auto mr-auto mt-[100px] p-[30px] text-justify w-[50vw] min-w-[375px] md:mr-0 mb-[200px]'>

                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.4, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>hihihihihiihi</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.8, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>heyheyheyheyhey</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 1.2, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>hellohellohellohello</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 1.6, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>yoyoyoyoyoyoyo</h2>
                </motion.div>

            </section>
            {/*
            </Parallax>
            */}



            <section className='mt-[200px] mb-[10px]'>
                <CarouselText baseVelocity={-3}>
                    <h2 className="min-w-[45vw] ml-[30px]">console.log("Hello world -Ryan")</h2>
                    <h2 className="text-red-500 ml-[30px] text-center xl:w-[30vw]">|</h2>
                    <h2 className="min-w-[45vw] ml-[30px]">print("Hello world -Ryan")</h2>
                    <h2 className="text-green-500 ml-[30px] text-center xl:w-[30vw]">|</h2>
                    <h2 className="min-w-[45vw] ml-[30px]">System.out.print("Hello world -Ryan")</h2>
                    <h2 className="text-blue-500 ml-[20px] text-center xl:w-[30vw]">|</h2>
                </CarouselText>
                <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[95vw] block ml-auto mr-auto mt-[-10px]' />
            </section>


            <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="min-h-[80vh] max-w-[100vw]">
                <ParallaxBannerLayer image="trylon.jpeg" speed={-20} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <Parallax speed={10} className="rounded-lg bg-opacity-50 overflow-hidden pt-[50px] pb-[50px]">
                        <motion.div
                            initial={{ opacity: 0, transform: "translateX(300px)" }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateX(30px)",
                                transition: { duration: 1 }
                            }}
                            viewport={{ once: true }}
                            variants={variants}>
                            <h2 className='text-center uppercase z-[11] block ml-auto  overflow-hidden w-[40vw] min-w-[400px] rounded-[10px] font-[Takota] 
                    scale-y-[1.25] text-[#171717]  bg-[rgba(255,255,255,0.71)] dark:bg-[rgba(0,0,0,0)] 
                    text-[60px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[100px] lg:text-[80px] md:text-[60px] '>
                                Projects
                            </h2>
                        </motion.div>
                    </Parallax>

                </ParallaxBannerLayer>
            </ParallaxBanner>



            {/*
            <Parallax speed={5} >
            */}
            <section className='block ml-auto mr-auto mt-[100px] p-[30px] text-justify w-[60vw] min-w-[375px] md:ml-0 mb-[200px]'>

                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.4, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>hihihihihiihi1</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.8, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>heyheyheyheyhey1</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 1.2, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>hellohellohellohello1</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 1.6, duration: 1 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>yoyoyoyoyoyoyo1</h2>
                </motion.div>

            </section>
            {/*
            </Parallax>
            */}
            {/*
OLD
            <a href="#" className='p-0 rounded-[50px] border-white border-2 text-[20px] text-center inline-block ml-[10px]'>
                <span className='absolute inline-block text-center m-0 p-0 border-0'>Planit</span>
                <Marquee
                    className='opacity-0 overflow-hidden rounded-[50px] hover:opacity-100 bg-black absolute top-0 left-0 text-[20px] ease-linear duration-200 w-[100%]'
                    speed={75}
                    gradient={false}
                    direction={'right'}>
                    Planit
                </Marquee>
            </a>
                    */}

            <a href="https://github.com/ryan-christopher/cs411-planit" target={"_blank"} rel="noreferrer" className='relative text-[30px] uppercase flex justify-center items-center h-[50px] border-2 border-[#f9f5e9] rounded-[50px] w-[175px] text-center'>
                <span className='inline-block align-baseline text-center opacity-100 hover:opacity-0 ease-linear duration-200'>Planit</span>
                <Marquee
                    className='!absolute top-0 left-0 w-[100%] !h-[100%] rounded-[50px] bg-[#171717] opacity-0 hover:opacity-100 ease-linear duration-150'
                    speed={75}
                    gradient={false}
                    direction={'right'}>
                    <span className='pl-[15px] pr-[15px]'>Planit</span>
                    <span className='pl-[15px] pr-[15px]'>Planit</span>

                </Marquee>
            </a>

            <br /><br /><br /><br /><br /><br />

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