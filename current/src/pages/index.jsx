import React from 'react'

// Styles
import "../styles/App.css"
import "../styles/index.css"

// Components
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'
import Credits from '../components/Credits'

// Moving Text
import Marquee from "react-fast-marquee";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import CarouselText from '../components/CarouselText.tsx';
import { motion } from 'framer-motion';

// 3D Models
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei"
import { Suspense } from 'react'

// Icons
import {
    SiSolidity, SiJavascript, SiEthereum,
    SiVisualstudio, SiUnity, SiNextdotjs,
    SiDjango, SiWeb3Dotjs, SiScratch,
    SiFlask, SiTailwindcss
} from "react-icons/si"
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
import {
    AiFillApi
} from "react-icons/ai";

const variants = {
    visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const CoffeeCup = () => {
    const fbx = useLoader(FBXLoader, "./coffee_cup_fbx/Paper_coffee_cup.fbx");
    fbx.position.y = -0.5
    fbx.rotation.x = 0
    fbx.rotation.z = 0
    fbx.rotation.x += 0.1;
    fbx.rotation.z -= 0.05
    useFrame(() => {
        fbx.rotation.y -= 0.0075
    })
    return <primitive object={fbx} scale={0.011} />;
};

function index() {
    return (
        <div className='bg-[#f9f5e9] dark:bg-[#171717] ease-in duration-200'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="min-h-[1500px] lg:h-[110vh] xl:h-[115vh] max-w-[100vw]">
                <ParallaxBannerLayer image="boston2.jpg" speed={-40} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <img src="headerpic.jpg" alt="My portrait." id="headerpic" className="w-[150px] relative mt-[100px] md:w-[200px] xl:w-[250px]" />
                    <div className="content w-[92vw] pb-[30px] rounded-sm mt-[30px] md:mt-5 bg-[#ffffff77] dark:bg-[#00000045] backdrop-blur-[2px] border-[1px] 
                        border-[#171717] dark:border-[#f9f5e9] ease-in duration-200">
                        <h2 id="introtext" className='glitch text-center pt-[20px] pb-[20px] m:pt-[50px] m:pb-[50px] xl:pt-[100px] xl:pb-[100px] 
                            text-[#171717] text-[52px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[120px] lg:text-[80px] md:text-[60px]'>
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
                                <p className="block ml-auto mr-auto w-[95%] lg:w-[80%] m-[10px] text-[20px] text-justify">
                                    I'm a recent Boston University grad who studied computer science and music.
                                </p>
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
                                <p className="block ml-auto mr-auto w-[95%] lg:w-[80%] m-[10px] text-[20px] text-justify">
                                    I’m a classically trained musician turned programmer from Las Vegas aiming to use my
                                    interests in technology to build and design websites, web apps, and software.
                                </p>
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

            <Parallax speed={10} className="rounded-lg bg-opacity-50">
                <motion.div
                    custom={100}
                    animate="visible"
                    initial={{ opacity: 0, transform: "translateX(-300px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateX(0px)",
                        transition: { duration: 0.7 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2 className='text-right overflow-hidden uppercase w-[45vw] min-w-[375px] l:ml-[-100px] rounded-[10px] 
                    font-[Takota] scale-y-[1.25] text-[#171717] text-[55px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[90px] lg:text-[70px] md:text-[60px] '>
                        A bit about me
                    </h2>
                </motion.div>
            </Parallax>
            <section className='block ml-auto mr-auto mt-[20px] p-[30px] text-justify w-[50vw] min-w-[375px] md:mr-0 mb-[200px]'>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.2, duration: 0.7 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2 className="uppercase text-[25px] text-left lg:text-[45px] max-w-[500px] lg:mt-[-200px]">
                        I'm an aspiring developer who became intrigued with coding and technology
                        in my first year of college.
                    </h2>
                </motion.div>
                <Canvas className='!w-[200px] !h-[200px] lg:!w-[300px] lg:!h-[300px] block ml-[10vw]'>
                    <ambientLight intensity={1} />
                    <directionalLight color="#bbbbbb" position={[6, 3, 3]} />
                    <Suspense fallback={null}>
                        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                        <CoffeeCup />
                    </Suspense>
                </Canvas>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.4, duration: 0.7 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2 className="uppercase text-[25px] text-right lg:text-[45px] max-w-[600px] lg:ml-[150px]">
                        I started off taking a web design class which
                        then quickly turned to classes on algorithms, python,
                        java, web app development, and software engineering.
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.6, duration: 0.7 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2 className="uppercase text-[25px] text-left lg:text-[45px] max-w-[600px] lg:ml-[-300px]">
                        Some of my interests are web development, software design, blockchain,
                        music, tennis, skating, and video games.
                    </h2>
                </motion.div>
            </section>

            <Laptop />

            <section className='mt-[200px] mb-[10px]'>
                <CarouselText baseVelocity={-3}>
                    <h2 className="min-w-[45vw] ml-[30px]">console.log("Hello world -Ryan")</h2>
                    <h2 className="text-red-500 ml-[30px] text-center xl:w-[30vw]">|</h2>
                    <h2 className="min-w-[45vw] ml-[30px]">print("Hello world -Ryan")</h2>
                    <h2 className="text-green-500 ml-[30px] text-center xl:w-[30vw]">|</h2>
                    <h2 className="min-w-[45vw] ml-[30px]">System.out.print("Hello world -Ryan")</h2>
                    <h2 className="text-blue-500 ml-[20px] text-center xl:w-[30vw]">|</h2>
                </CarouselText>
                <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[95vw] block ml-auto mr-auto mt-[0px] pb-[5px]' />
            </section>

            <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="h-[3000px] min-h-[1250px] xl:h-[100vh]">
                <ParallaxBannerLayer image="trylon.jpeg" speed={-20} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <Parallax speed={10} className="rounded-lg bg-opacity-50 overflow-hidden pt-[50px] pb-[50px]">
                        <motion.div
                            initial={{ opacity: 0, transform: "translateX(300px)" }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateX(30px)",
                                transition: { duration: 0.7 }
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
                    <div className="flex flex-col xl:flex-row justify-between w-[90vw] ml-[5vw]">
                        <motion.div
                            className='w-[100%] xl:w-[29vw] mt-[25px] mb-[25px] min-h-[500px] flex-col justify-center text-center rounded-[10px] 
                            bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-md'
                            initial={{ opacity: 0, transform: "translateY(100px)" }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                                transition: { delay: 0, duration: 0.7 }
                            }}
                            viewport={{ once: true }}>
                            <h3 className="text-[45px] uppercase font-['Atami'] pt-[20px]">Portfolio</h3>
                            <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[75%] block ml-auto mr-auto pb-[10px]' />
                            <p className='text-[20px]'>The site that you're on.</p>
                            <span className='mt-[20px] w-[74%] flex ml-[13%] justify-between text-[30px]'>
                                <IoLogoHtml5 className=" text-red-500" />
                                <SiTailwindcss className=" text-blue-400" />
                                <SiJavascript className=" text-yellow-400" />
                                <FaReact className=" text-blue-400" />
                                <IoLogoGithub className=" text-purple-400" />
                            </span>
                            <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[75%] block ml-auto mr-auto mt-[20px]' />
                            <p className='text-[18px] w-[85%] text-justify block ml-auto mr-auto mt-[20px] leading-[28px]'>
                                This site is a culmination of many sketches, debugging sessions, trial and error,
                                and of course stack overflow pages viewed between the hours of 8pm and 4am.
                                It was made to host my portfolio as well as serve as an entry in my
                                list of works. I used the React framework along with Tailwind CSS
                                and NPM packages such as THREE.js, Framer Motion, and React Scroll
                                Parallax.</p>
                            <img src="portfoliopreview.png" alt="Landing page of this website."
                                className='w-[65%] min-w-[200px] max-w-[400px] block ml-auto mr-auto mt-[30px] mb-[30px] rounded-md' />
                            <a href="https://github.com/ryan-christopher/ryan-christopher.github.io" target={"_blank"} rel="noreferrer"
                                className='relative ml-[50%] translate-x-[-125px] text-[30px] uppercase flex justify-center items-center h-[50px] 
                                border-2 border-[#E1251E] rounded-[50px] w-[250px] text-center mb-[30px]'>
                                <span className='inline-block align-baseline text-center opacity-100 hover:opacity-0 ease-linear duration-200'>Check it out</span>
                                <Marquee
                                    className='!absolute top-0 left-0 w-[100%] !h-[100%] rounded-[50px] bg-[#171717] text-[#f9f5e9] opacity-0 hover:opacity-100 ease-linear duration-150'
                                    speed={125}
                                    gradient={false}
                                    direction={'left'}>
                                    <span className='pl-[15px] pr-[15px]'>You're already on it</span>
                                    <span className='pl-[15px] pr-[15px]'>You're already on it</span>
                                </Marquee>
                            </a>
                        </motion.div>
                        <motion.div
                            className='w-[100%] xl:w-[29vw] mt-[25px] mb-[25px] min-h-[500px] flex-col justify-center text-center rounded-[10px] 
                            bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-md'
                            initial={{ opacity: 0, transform: "translateY(100px)" }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                                transition: { delay: 0.25, duration: 0.7 }
                            }}
                            viewport={{ once: true }}>
                            <h3 className="text-[37px] lg:text-[45px] uppercase font-['Atami'] pt-[20px]">TCS Curriculum</h3>
                            <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[75%] block ml-auto mr-auto pb-[10px]' />
                            <p className='text-[20px]'>I like to teach things.</p>
                            <span className='mt-[20px] w-[74%] flex ml-[13%] justify-between text-[30px]'>
                                <IoLogoPython className=" text-yellow-300" />
                                <SiScratch className=" text-orange-400" />
                                <IoLogoHtml5 className=" text-red-500" />
                                <SiUnity className=" text-black dark:text-white" />
                                <SiJavascript className=" text-yellow-400" />
                            </span>
                            <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[75%] block ml-auto mr-auto mt-[20px]' />
                            <p className='text-[18px] w-[85%] text-justify block ml-auto mr-auto mt-[20px] leading-[28px]'>
                                I am encouraged to have unique projects to teach students at The Coder School, and as such I have created a
                                list of 30+ self made and open source projects. Material includes scratch programs, python games, web apps, and more.
                                There are also some step by step tutorials on how to create certain projects. The curriculum I have made is now regularly
                                used by teachers at The Coder School.
                            </p>
                            <img src="tcspreview.png" alt="A snippet of a coding tutorial I made."
                                className='w-[65%] min-w-[200px] max-w-[400px] block ml-auto mr-auto mt-[30px] mb-[30px] rounded-md' />
                            <a href="https://github.com/ryan-christopher/tcs" target={"_blank"} rel="noreferrer"
                                className='relative ml-[50%] translate-x-[-125px] text-[30px] uppercase flex justify-center items-center h-[50px] 
                                border-2 border-[#24DB3F] rounded-[50px] w-[250px] text-center mb-[30px]'>
                                <span className='inline-block align-baseline text-center opacity-100 hover:opacity-0 ease-linear duration-200'>Check it out</span>
                                <Marquee
                                    className='!absolute top-0 left-0 w-[100%] !h-[100%] rounded-[50px] bg-[#171717] text-[#f9f5e9] opacity-0 hover:opacity-100 ease-linear duration-150'
                                    speed={125}
                                    gradient={false}
                                    direction={'left'}>
                                    <span className='pl-[15px] pr-[15px]'>TCS Curriculum</span>
                                    <span className='pl-[15px] pr-[15px]'>TCS Curriculum</span>
                                </Marquee>
                            </a>
                        </motion.div>
                        <motion.div
                            className='w-[100%] xl:w-[29vw] mt-[25px] mb-[25px] min-h-[500px] flex-col justify-center text-center rounded-[10px] 
                            bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-md'
                            initial={{ opacity: 0, transform: "translateY(100px)" }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                                transition: { delay: 0.5, duration: 0.7 }
                            }}
                            viewport={{ once: true }}>
                            <h3 className="text-[45px] uppercase font-['Atami'] pt-[20px]">Planit</h3>
                            <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[75%] block ml-auto mr-auto pb-[10px]' />
                            <p className='text-[20px]'>Senior year CS project.</p>
                            <span className='mt-[20px] w-[74%] flex ml-[13%] justify-between text-[30px]'>
                                <FaReact className=" text-blue-400" />
                                <SiFlask className=" text-black dark:text-white" />
                                <IoLogoHtml5 className=" text-red-500" />
                                <AiFillApi className="text-black dark:text-white" />
                                <IoLogoCss3 className=" text-blue-500" />
                            </span>
                            <hr className='text-[#171717] border-[#171717] dark:border-[#f9f5e9] w-[75%] block ml-auto mr-auto mt-[20px]' />
                            <p className='text-[18px] w-[85%] text-justify block ml-auto mr-auto mt-[20px] leading-[28px]'>
                                For my final semester of college I was placed in a team for a software engineering course. Planit is a web app with
                                a decoupled architecture using a React front end and Flask back end. It allows users to quickly see
                                areas of interest near to them with step by step instructions through API calls to Yelp and GraphHopper. I was
                                the front end developer and frequently assisted back end development as well.
                            </p>
                            <img src="planitpreview.png" alt="Landing page of the web app Planit I helped make as a college project."
                                className='w-[65%] min-w-[200px] max-w-[400px] block ml-auto mr-auto mt-[30px] mb-[30px] rounded-md' />
                            <a href="https://github.com/ryan-christopher/cs411-planit" target={"_blank"} rel="noreferrer"
                                className='relative ml-[50%] translate-x-[-125px] text-[30px] uppercase flex justify-center items-center h-[50px] 
                                border-2 border-[#0F60F0] rounded-[50px] w-[250px] text-center mb-[30px]'>
                                <span className='inline-block align-baseline text-center opacity-100 hover:opacity-0 ease-linear duration-200'>Check it out</span>
                                <Marquee
                                    className='!absolute top-0 left-0 w-[100%] !h-[100%] rounded-[50px] bg-[#171717] text-[#f9f5e9] opacity-0 hover:opacity-100 ease-linear duration-150'
                                    speed={125}
                                    gradient={false}
                                    direction={'left'}>
                                    <span className='pl-[15px] pr-[15px]'>Planit</span>
                                    <span className='pl-[15px] pr-[15px]'>Planit</span>
                                </Marquee>
                            </a>
                        </motion.div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>

            <section className='block ml-auto mr-auto mt-[100px] p-[30px] text-justify w-[60vw] min-w-[375px] md:ml-0 mb-[200px]'>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { duration: 0.7 }
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
                        transition: { delay: 0.2, duration: 0.7 }
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
                        transition: { delay: 0.4, duration: 0.7 }
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
                        transition: { delay: 0.6, duration: 0.7 }
                    }}
                    viewport={{ once: true }}
                    variants={variants}>
                    <h2>yoyoyoyoyoyoyo1</h2>
                </motion.div>
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
            <Credits />
            <Footer />
        </div >
    )
}

export default index