import React from 'react'
import Footer from '../components/Footer'
import "../styles/App.css"
import "../styles/index.css"
import Marquee from "react-fast-marquee";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

//ICONS
import {
    IoLogoPython, IoLogoHtml5, IoLogoCss3,
    IoLogoGithub, IoIosTennisball
} from "react-icons/io"
import {
    FaJava, FaReact
} from "react-icons/fa"
import {
    SiSolidity, SiJavascript, SiEthereum, SiVisualstudio,
    SiUnity, SiNextdotjs, SiDjango, SiWeb3Dotjs
} from "react-icons/si"
import {
    CgMusicSpeaker
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


function index() {

    return (
        <div className='bg-white dark:bg-black ease-in duration-200'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="h-[1000px] lg:h-[100vh] xl:h-[120vh]">
                <ParallaxBannerLayer image="boston2.jpg" speed={-40} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <div id="slantText" className="scale-75 mt-[50px] xl:mt-[100px] xl:scale-100 md:scale-75 ease-in duration-200">
                        <div className="[-webkit-text-stroke:2px_black] perspective-text dark:[-webkit-text-stroke:2px_white]">
                            <div className="perspective-line hover:text-black dark:hover:text-white ease-in duration-200">
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
                    <div className="content bg-transparent ease-in duration-200">
                        <img src="headerpic.jpg" alt="My portrait." id="headerpic" className="w-[150px] relative top-[-30px] md:w-[200px] md:top-[-20px] lg:top-[0px] xl:w-[250px]" />
                        <div className="landing-flex-container p-[30px] rounded-md md:mt-5 bg-[#ffffff77] dark:bg-[#00000055] ease-in duration-200">
                            <div className="landing-flex-item-left">
                                <h2 id="introtext" className='ml-[10vw] text-black text-[50px] dark:text-white ease-in duration-200 xl:text-[120px] lg:text-[80px] md:text-[50px] '>
                                    Hey, <br /> I'm Ryan
                                </h2>
                            </div>
                            <div className="landing-flex-item-right">
                                <p className="m-[10px] font-[Atami] text-[20px]">I'm a recent Boston University grad who studied computer science and music.</p>
                                <hr className="h-[4px] w-[75%] block ml-auto mr-auto border-none rounded-sm bg-black dark:bg-white ease-in duration-200" />
                                <p></p>
                            </div>
                        </div>

                    </div>


                </ParallaxBannerLayer>
            </ParallaxBanner>
            <Marquee
                className='marquee'
                speed={50}
                gradient={false}
                direction={'left'}>
                <IoLogoPython className="marqueeicon" />
                <IoLogoHtml5 className="marqueeicon" />
                <IoLogoCss3 className="marqueeicon" />
                <SiJavascript className="marqueeicon" />
                <FaReact className="marqueeicon" />
                <IoLogoGithub className="marqueeicon" />
            </Marquee>
            {/*
            <Marquee
                        className='marquee'
                        speed={50}
                        gradient={false}
                        direction={'right'}>
                        <FaJava className="marqueeicon" />
                        <SiSolidity className="marqueeicon" />
                        <SiEthereum className="marqueeicon" />
                        <SiVisualstudio className="marqueeicon" />
                        <SiUnity className="marqueeicon" />
                        <SiNextdotjs className="marqueeicon" />
                        <SiDjango className="marqueeicon" />
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
    */}
            {/*
            <Parallax speed={10} className="rounded-lg bg-opacity-50">
                yoyoyo
            </Parallax>
            */}

            <Footer />
        </div>
    )
}

export default index