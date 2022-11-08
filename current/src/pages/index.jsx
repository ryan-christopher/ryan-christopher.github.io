// Styles
import "../styles/App.css"
import "../styles/index.css"
// Components
import SectionHeader from "../components/SectionHeader"
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'
import CoffeeCup from '../components/CoffeeCup'
import Midi from '../components/Midi'
import InterestItem from '../components/InterestItem'
import ProjectCard from '../components/ProjectCard'
import MarqueeLink from '../components/MarqueeLink'
// Moving Text
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import CarouselText from '../components/CarouselText.tsx';
import { motion } from 'framer-motion';
// Icons
import { SiJavascript } from "react-icons/si"
import { IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoGithub } from "react-icons/io"
import { IoCodeSlash } from "react-icons/io5"
import { FaReact } from "react-icons/fa"
import { CgMusic } from "react-icons/cg"

function index() {
    return (
        <div id="home" className='bg-[#dfd5c1] dark:bg-[#171717] ease-in duration-200'>
            <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="min-h-[1500px] lg:h-[110vh] xl:h-[115vh] max-w-[100vw]">
                <ParallaxBannerLayer image="boston2.jpg" speed={10} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <img src="cartoonRyan.png" alt="A painting of me." className="w-[250px] mt-[75px] lg:w-[350px] lg:mt-[100px] mb-[-30px] md:mb-[-20px] block ml-auto mr-auto" />
                    <div className="content w-[85vw] max-w-[1800px] pb-[30px] rounded-sm mt-[30px] md:mt-5 bg-[#dfd5c1b3] dark:bg-[rgba(0,0,0,0.2)] backdrop-blur-sm border-[1px] 
                        border-[#171717] dark:border-[#dfd5c1] ease-in duration-200">
                        <h2 id="introtext" className='glitch text-center pt-[40px] pb-[0px] m:pt-[50px] m:pb-[50px] xl:pt-[70px] xl:pb-20px] 
                            text-[#171717] text-[48px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[120px] lg:text-[80px] md:text-[60px]'>
                            Hey, I'm Ryan
                        </h2>
                        <div className="landing-flex-container p-[30px] rounded-md md:mt-5 w-[85vw] max-w-[1800px] ease-in duration-200">
                            <div className="landing-flex-item-left">
                                <div id="slantText" className="scale-[0.9] min-w-[450px] w-[100vw] md:w-[100%] translate-x-[-130px] sm:translate-x-[-60px] 
                                xl:mt-[30px] xl:scale-[1.25] ease-in duration-200">
                                    <div className="[-webkit-text-stroke:2px_#171717] perspective-text dark:[-webkit-text-stroke:2px_#f9f5e9]">
                                        <div className="perspective-line hover:text-[#171717] dark:hover:text-[#dfd5c1] ease-linear duration-200">
                                            <p>Coder</p>
                                            <p>Designer</p>
                                        </div>
                                        <div className="perspective-line hover:text-[#171717] dark:hover:text-[#dfd5c1] ease-in duration-200">
                                            <p>Musician</p>
                                            <p>Developer</p>
                                        </div>
                                        <div className="perspective-line hover:text-[#171717] dark:hover:text-[#dfd5c1] ease-in duration-200">
                                            <p>Teacher</p>
                                            <p>Producer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="landing-flex-item-right">
                                <p className="block ml-auto mr-auto w-[100%] lg:w-[60%] lg:mt-[-10px] mb-[10px] text-[22px] text-justify">
                                    I'm a recent Boston University grad who studied computer science and music.
                                </p>
                                <br />
                                <hr className="h-[2px] w-[55%] min-w-[225px] block ml-auto mr-auto border-none rounded-sm bg-[#171717] dark:bg-[#dfd5c1] ease-in duration-200" />
                                <div className="w-[50%] min-w-[225px] max-w-[500px] block ml-auto mr-auto pt-[10px] pb-[10px]">
                                    <div className="w-[100%] inline-flex justify-center items-center">
                                        <IoCodeSlash className="w-[100px] text-[50px] " />
                                        <img className="w-[125px] p-[10px]  ml-auto mr-auto" src="bulogo.png" alt="The Boston University logo." />
                                        <CgMusic className="w-[100px] text-[50px]" />
                                    </div>
                                </div>
                                <hr className="h-[2px] w-[55%] min-w-[225px] block ml-auto mr-auto border-none rounded-sm bg-[#171717] dark:bg-[#dfd5c1] ease-in duration-200" />
                                <br />
                                <p className="block ml-auto mr-auto w-[100%] lg:w-[60%] m-[10px] text-[22px] text-justify">
                                    A classically trained musician turned programmer from Las Vegas aiming to use my
                                    interests in technology to build and design meaningful websites, web apps, software, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className='asteriskcontainer block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                        <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[30px] ease-linear duration-[50ms] mr-[8vw] ml-[8vw]">
                            <img src="whiteasterisk.png" alt="" className="asterisk p-[0px] opacity-100 ease-in duration-200" aria-hidden="true" />
                        </Parallax>
                    </span>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <section id="about" className='mt-[50px]  lg:mt-[100px] lg:pb-[75px]'>
                <CarouselText baseVelocity={-3}>
                    <IoLogoPython className="marqueeicon text-[45px] xl:text-[60px] text-yellow-200" />
                    <IoLogoHtml5 className="marqueeicon text-[45px] xl:text-[60px] text-red-500" />
                    <IoLogoCss3 className="marqueeicon text-[45px] xl:text-[60px] text-blue-500" />
                    <SiJavascript className="marqueeicon text-[45px] xl:text-[60px] text-yellow-400" />
                    <FaReact className="marqueeicon text-[45px] xl:text-[60px] text-blue-400" />
                    <IoLogoGithub className="marqueeicon text-[45px] xl:text-[60px] text-purple-400" />
                </CarouselText>
            </section>
            <SectionHeader title="A bit about me" />
            <img src="headerpic.jpg" alt="My portrait." id="headerpic" className="w-[150px] md:w-[175px] xl:w-[200px] xl:mb-[50px] border-[1px] 
                        border-[#171717]" />
            <section className='block ml-auto mr-auto mt-[50px] pt-[10px] pl-[30px] pr-[30px] text-justify w-[100vw] md:w-[50vw] min-w-[300px] mb-[0px]'>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.2, duration: 0.7 }
                    }}
                    viewport={{ once: true }}>
                    <h2 className="uppercase text-[25px] text-left w-[70vw] lg:text-[45px] max-w-[600px]">
                        I'm a developer who became intrigued with programming and technology
                        in my first year of college.
                    </h2>
                </motion.div>
                <CoffeeCup />
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.2, duration: 0.7 }
                    }}
                    viewport={{ once: true }}>
                    <h2 className="uppercase text-[25px] text-right w-[70vw] lg:text-[45px] max-w-[600px] ml-auto">
                        What started as a web design class quickly became
                        courses on algorithms, python, java, computer systems,
                        web app development, and software engineering.
                    </h2>
                </motion.div>
                <Midi />
            </section>
            <motion.div
                className="mt-[100px]"
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: { duration: 0.7 }
                }}
                viewport={{ once: true }}>
                <h2 className="uppercase text-center block ml-auto mr-auto text-[35px] lg:text-[50px] max-w-[600px]">
                    I'm interested in
                </h2>
            </motion.div>
            <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[90vw] 
            block ml-auto mr-auto pb-[25px] lg:pb-[50px]' />
            <div className='pt-[10px] pb-[150px] w-[50vw] md:w-[50vw] min-w-[320px] max-w-[600px] ml-auto mr-auto'>
                <InterestItem title="software development" align="mr-auto" />
                <InterestItem title="web development" align="mr-auto ml-auto" />
                <InterestItem title="data science" align="ml-auto" />
                <InterestItem title="web design" align="mr-auto ml-auto" />
                <InterestItem title="coffee" align="mr-auto" />
                <InterestItem title="blockchain" align="mr-auto ml-auto" />
                <InterestItem title="music" align="ml-auto" />
                <InterestItem title="art" align="mr-auto ml-auto" />
                <InterestItem title="tennis" align="mr-auto" />
                <InterestItem title="skating" align="mr-auto ml-auto" />
                <InterestItem title="video games" align="ml-auto" />
                <InterestItem title="food" align="mr-auto" />
            </div>
            <Laptop className="hover:cursor-pointer" />
            <section id="portfolio" className='mt-[250px] mb-[10px]'>
                <CarouselText baseVelocity={-2}>
                    <h2 className="min-w-[45vw] ml-[30px]">console.log("Hello world -Ryan")</h2>
                    <h2 className="text-red-500 ml-[30px] text-center xl:w-[30vw]">|</h2>
                    <h2 className="min-w-[45vw] ml-[30px]">print("Hello world -Ryan")</h2>
                    <h2 className="text-green-500 ml-[30px] text-center xl:w-[30vw]">|</h2>
                    <h2 className="min-w-[45vw] ml-[30px]">System.out.print("Hello world -Ryan")</h2>
                    <h2 className="text-blue-500 ml-[20px] text-center xl:w-[30vw]">|</h2>
                </CarouselText>
                <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[95vw] block ml-auto mr-auto mt-[0px] pb-[5px]' />
            </section>
            <ParallaxBanner style={{ aspectRatio: '1 / 1' }} id="projectCardsContainer" className="h-[2850px] min-h-[1350px] xl:h-[100vh]">
                <ParallaxBannerLayer image="birmingham.jpg" speed={10} />
                <ParallaxBannerLayer className='bg-[#75757544] dark:bg-[#00000066] ease-in duration-200' speed={0}>
                    <SectionHeader title="Projects" />
                    <div className="flex flex-col xl:flex-row justify-between w-[90vw] ml-[5vw]">
                        <ProjectCard
                            name="Portfolio"
                            nameSize="text-[45px]"
                            phrase="The site that you're on."
                            description="The culmination of many sketches, debugging sessions, trial and error,
                                        and stack overflow pages viewed between 8pm and 4am.
                                        Created to host my portfolio as well as serve as an entry in my
                                        list of works. Made with React, Tailwind CSS
                                        and NPM packages such as THREE.js, Framer Motion, and React Scroll
                                        Parallax."
                            iconList={[0, 1, 2, 3, 4]}
                            imageUrl="portfoliopreview.png"
                            borderCol="border-[#E1251E]"
                            marqueeLink="https://github.com/ryan-christopher/ryan-christopher.github.io"
                            marqueeText="You're already on it" />
                        <ProjectCard
                            name="TCS Curriculum"
                            nameSize="text-[37px] mt-[10px] pt-[18px] pb-[4px]"
                            phrase="I like to teach things."
                            description="I'm encouraged to have unique projects to teach students at The Coder School, and as such I have created a
                            list of 30+ self made and open source projects. Material includes scratch programs, python games, web apps, and more. 
                            The curriculum is regularly used by teachers at The Coder School."
                            iconList={[5, 6, 7, 8, 9]}
                            imageUrl="tcspreview.png"
                            borderCol="border-[#24DB3F]"
                            marqueeLink="https://github.com/ryan-christopher/tcs"
                            marqueeText="TCS Curriculum" />
                        <ProjectCard
                            name="Planit"
                            nameSize="text-[45px]"
                            phrase="Senior year CS project."
                            description="For my final semester of college I was placed in a team for a software engineering course. Planit is a web app with
                            a decoupled architecture using a React front end and Flask back end. It allows users to quickly see
                            areas of interest near to them with step by step instructions through API calls to Yelp and GraphHopper."
                            iconList={[10, 11, 12, 13, 14]}
                            imageUrl="planitpreview.png"
                            borderCol="border-[#0F60F0]"
                            marqueeLink="https://github.com/ryan-christopher/cs411-planit"
                            marqueeText="Planit" />
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <h2 className='text-[40px] pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-center block ml-auto mr-auto font-["Atami_Display"] w-[200px] bg-[#dfd5c1] 
            dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] uppercase relative z-[1] mt-[50px]'>
                More
            </h2>
            <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[90vw] 
            block ml-auto mr-auto relative top-[-36px] z-0 overflow-hidden' />
            <div className='flex flex-wrap justify-center pt-[50px] w-[90vw] md:w-[45vw] min-w-[320px] ml-auto mr-auto'>
                <MarqueeLink title="Beacon Street Records" link="https://ryan-christopher.github.io/beaconstreetrecords/" />
                <MarqueeLink title="Conway's Game of Life" link="https://github.com/ryan-christopher/tcs/blob/main/python/games/gameoflife.py" />
                <MarqueeLink title="Arts Internship Site" link="https://ryan-christopher.github.io/fa550project/" />
                <MarqueeLink title="Shakespeare Bot" link="https://github.com/ryan-christopher/tcs/blob/main/python/games/shakespearebot.py" />
                <MarqueeLink title="My Wordle" link="https://ryan-christopher.github.io/wordle/" />
                <MarqueeLink title="Modal HTML Tutorial" link="https://github.com/ryan-christopher/tcs/tree/main/webroxcamp/ourcamp" />
                <MarqueeLink title="FizzBuzz (of course!)" link="https://github.com/ryan-christopher/tcs/blob/main/python/applications/fizzbuzz.py" />
                <MarqueeLink title="Scratch Tic Tac Toe" link="https://scratch.mit.edu/projects/622549017/" />
                <MarqueeLink title="Wallet Watch (WIP)" link="https://github.com/ryan-christopher/walletwatch" />
            </div>
            <div id="contact"></div>
            <SectionHeader title="Get in touch" />
            <Footer />
        </div >
    )
}
export default index