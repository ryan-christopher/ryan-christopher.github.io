// Styles
import "../styles/App.css"
import "../styles/index.css"
// Components
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'
import Credits from '../components/Credits'
import CoffeeCup from '../components/CoffeeCup'
import Midi from '../components/Midi'
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
        <div className='bg-[#dfd5c1] dark:bg-[#171717] ease-in duration-200'>
            <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="min-h-[1500px] lg:h-[110vh] xl:h-[115vh] max-w-[100vw]">
                <ParallaxBannerLayer image="boston2.jpg" speed={10} />
                <ParallaxBannerLayer className='bg-[#2a2a2abb] dark:bg-[#000000bb] ease-in duration-200' speed={0}>
                    <img src="headerpic.jpg" alt="My portrait." id="headerpic" className="w-[150px] relative mt-[100px] md:w-[200px] xl:w-[250px] border-[1px] 
                        border-[#171717]" />
                    <div className="content w-[92vw] pb-[30px] rounded-sm mt-[30px] md:mt-5 bg-[#dfd5c1b3] dark:bg-[rgba(0,0,0,0.2)] backdrop-blur-sm border-[1px] 
                        border-[#171717] dark:border-[#dfd5c1] ease-in duration-200">
                        <h2 id="introtext" className='glitch text-center pt-[40px] pb-[0px] m:pt-[50px] m:pb-[50px] xl:pt-[100px] xl:pb-[100px] 
                            text-[#171717] text-[48px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[120px] lg:text-[80px] md:text-[60px] uppercase'>
                            Hey, I'm Ryan
                        </h2>
                        <div className="landing-flex-container p-[30px] rounded-md md:mt-5 ease-in duration-200">
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
                                <p className="block ml-auto mr-auto w-[95%] lg:w-[60%] lg:mt-[-10px] mb-[10px] text-[22px] text-justify">
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
                                <p className="block ml-auto mr-auto w-[95%] lg:w-[60%] m-[10px] text-[22px] text-justify">
                                    I’m a classically trained musician turned programmer from Las Vegas aiming to use my
                                    interests in technology to build and design websites, web apps, and software.
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className='block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                        <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[50px] ease-linear duration-[50ms] mr-[8vw] ml-[8vw]">
                            <img src="whiteasterisk.png" alt="" className="asterisk p-[0px] opacity-100 ease-in duration-200" aria-hidden="true" />
                        </Parallax>
                    </span>
                </ParallaxBannerLayer>
            </ParallaxBanner>

            <section className='mt-[25px] pb-[100px]'>
                <CarouselText baseVelocity={-3}>
                    <IoLogoPython className="marqueeicon text-[45px] xl:text-[60px] text-yellow-200" />
                    <IoLogoHtml5 className="marqueeicon text-[45px] xl:text-[60px] text-red-500" />
                    <IoLogoCss3 className="marqueeicon text-[45px] xl:text-[60px] text-blue-500" />
                    <SiJavascript className="marqueeicon text-[45px] xl:text-[60px] text-yellow-400" />
                    <FaReact className="marqueeicon text-[45px] xl:text-[60px] text-blue-400" />
                    <IoLogoGithub className="marqueeicon text-[45px] xl:text-[60px] text-purple-400" />
                </CarouselText>
            </section>

            <Parallax speed={5} className="rounded-lg bg-opacity-50">
                <motion.div
                    initial={{ opacity: 0, transform: "translateX(-300px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateX(0px)",
                        transition: { duration: 0.7 }
                    }}
                    viewport={{ once: true }}>
                    <h2 className='text-center overflow-hidden uppercase w-[45vw] min-w-[375px] l:ml-[-100px] rounded-[10px] 
                    font-[Takota] scale-y-[1.25] text-[#171717] text-[55px] dark:text-[#f9f5e9] ease-in duration-200 xl:text-[90px] lg:text-[70px] md:text-[60px] '>
                        A bit about me
                    </h2>
                </motion.div>
            </Parallax>
            <section className='block ml-auto mr-auto mt-[20px] p-[30px] text-justify w-[50vw] min-w-[300px] mb-[200px]'>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.2, duration: 0.7 }
                    }}
                    viewport={{ once: true }}>
                    <h2 className="uppercase text-[25px] text-left lg:text-[45px] max-w-[600px]">
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
                    <h2 className="uppercase text-[25px] text-right lg:text-[45px] max-w-[600px] ml-auto">
                        I started off taking a web design class which
                        then quickly turned to classes on algorithms, python,
                        java, web app development, and software engineering.
                    </h2>
                </motion.div>
                <Midi />
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        transition: { delay: 0.2, duration: 0.7 }
                    }}
                    viewport={{ once: true }}>
                    <h2 className="uppercase text-left text-[25px] lg:text-[45px] max-w-[600px]">
                        Some of my interests are web development, software design, blockchain,
                        music, tennis, skating, and video games.
                    </h2>
                </motion.div>
            </section>

            <Laptop className="hover:cursor-pointer" />
            <section className='mt-[250px] mb-[10px]'>
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
            <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[3000px] min-h-[1350px] xl:h-[100vh]">
                <ParallaxBannerLayer image="birmingham.jpg" speed={10} />
                <ParallaxBannerLayer className='bg-[#75757544] dark:bg-[#00000066] ease-in duration-200' speed={0}>
                    <Parallax speed={5} className="rounded-lg bg-opacity-50 overflow-hidden pt-[70px] pb-[30px]">
                        <motion.div
                            initial={{ opacity: 0, transform: "translateX(300px)" }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateX(30px)",
                                transition: { duration: 0.7 }
                            }}
                            viewport={{ once: true }}>
                            <h2 className='text-center uppercase z-[11] block ml-auto  overflow-hidden w-[40vw] min-w-[400px] rounded-[10px] font-[Takota] 
                                scale-y-[1.25] dark:bg-[rgba(0,0,0,0)] 
                                text-[60px] dark:text-[#f9f5e9] text-[#171717] ease-in duration-200 xl:text-[100px] lg:text-[80px] md:text-[60px] '>
                                Projects
                            </h2>
                        </motion.div>
                    </Parallax>
                    <div className="flex flex-col xl:flex-row justify-between w-[90vw] ml-[5vw]">
                        <ProjectCard
                            name="Portfolio"
                            nameSize="text-[45px]"
                            phrase="The site that you're on."
                            description="This site is a culmination of many sketches, debugging sessions, trial and error,
                                        and of course stack overflow pages viewed between the hours of 8pm and 4am.
                                        It was made to host my portfolio as well as serve as an entry in my
                                        list of works. I used the React framework along with Tailwind CSS
                                        and NPM packages such as THREE.js, Framer Motion, and React Scroll
                                        Parallax."
                            iconList={[0, 1, 2, 3, 4]}
                            imageUrl="portfoliopreview.png"
                            borderCol="border-[#E1251E]"
                            marqueeLink="https://github.com/ryan-christopher/ryan-christopher.github.io"
                            marqueeText="You're already on it" />
                        <ProjectCard
                            name="TCS Curriculum"
                            nameSize="text-[37px] mt-[10px] pt-[19px] pb-[4px]"
                            phrase="I like to teach things."
                            description="I am encouraged to have unique projects to teach students at The Coder School, and as such I have created a
                            list of 30+ self made and open source projects. Material includes scratch programs, python games, web apps, and more.
                            There are also some step by step tutorials on how to create certain projects. The curriculum I have made is now regularly
                            used by teachers at The Coder School."
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
                            areas of interest near to them with step by step instructions through API calls to Yelp and GraphHopper. I was
                            the front end developer and frequently assisted back end development as well."
                            iconList={[10, 11, 12, 13, 14]}
                            imageUrl="planitpreview.png"
                            borderCol="border-[#0F60F0]"
                            marqueeLink="https://github.com/ryan-christopher/cs411-planit"
                            marqueeText="Planit" />
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <h2 className='text-[47px] pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-center block ml-auto mr-auto font-["Atami_Display"] w-[200px] bg-[#dfd5c1] 
            dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] uppercase relative z-[1] mt-[100px]'>
                More
            </h2>
            <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[90vw] 
            block ml-auto mr-auto relative top-[-40px] z-0 overflow-hidden' />
            <div className='flex flex-wrap justify-center pt-[50px] w-[90vw] md:w-[50vw] min-w-[320px] ml-auto mr-auto'>
                <MarqueeLink title="My Wordle" link="https://ryan-christopher.github.io/wordle/" />
                <MarqueeLink title="Beacon Street Records" link="https://ryan-christopher.github.io/beaconstreetrecords/" />
                <MarqueeLink title="Conway's Game of Life" link="https://github.com/ryan-christopher/tcs/blob/main/python/games/gameoflife.py" />
                <MarqueeLink title="Arts Internship Site" link="https://ryan-christopher.github.io/fa550project/" />
                <MarqueeLink title="Shakespeare Bot" link="https://github.com/ryan-christopher/tcs/blob/main/python/games/shakespearebot.py" />
                <MarqueeLink title="Modal HTML Tutorial" link="https://github.com/ryan-christopher/tcs/tree/main/webroxcamp/ourcamp" />
                <MarqueeLink title="FizzBuzz (of course!)" link="https://github.com/ryan-christopher/tcs/blob/main/python/applications/fizzbuzz.py" />
                <MarqueeLink title="Scratch Tic Tac Toe" link="https://scratch.mit.edu/projects/622549017/" />
                <MarqueeLink title="Wallet Watch (WIP)" link="https://github.com/ryan-christopher/walletwatch" />
            </div>
            <Credits />
            <Footer />
        </div >
    )
}
export default index