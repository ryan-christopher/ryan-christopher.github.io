import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';
import "../styles/footer.css"
import Credits from './Credits';

function Footer() {
    return (
        <div>
            <div className="flex-container text-[#171717] bg-[#dfd5c1] dark:text-[#f9f5e9] dark:bg-[#171717] mt-[50px] ease-in duration-200 overflow-hidden">
                <div className="flex-item-left">
                    <div className="flex-container-social">
                        <a href="mailto:ryanchristopher.dev@gmail.com?subject=Let's Connect" rel="noreferrer" target="_blank"><IoMailOutline
                            className="social-link ml-[10px] mr-[10px] text-white ease-in duration-200 border-2 border-[#171717] dark:border-[#f9f5e9]" id="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/rechristopher/" rel="noreferrer" target="_blank"><IoLogoLinkedin
                            className="social-link ml-[10px] mr-[10px] text-[#0a66c2] ease-in duration-200 border-2 border-[#171717] dark:border-[#f9f5e9]" id="linkedin" />
                        </a>
                        <a href="https://github.com/ryan-christopher/" rel="noreferrer" target="_blank"><IoLogoGithub
                            className="social-link ml-[10px] mr-[10px] text-white ease-in duration-200 border-2 border-[#171717] dark:border-[#f9f5e9]" id="github" />
                        </a>
                    </div>
                </div>
                <div className="flex-item-right">
                    <h3 className="footertext uppercase pt-[50px] sm:pt-0">Ryan Christopher</h3>
                    <h3 className="text-[12px]">&copy; 2022</h3>
                    <br />
                </div>
            </div>
            <Credits />
            <img src="./ryanmoji.png" alt="An emoji of me on a computer." className='relative bottom-[0px] block ml-auto mr-auto hover:mt-[50px] w-[200px] overflow-hidden ease-in duration-1000' />
        </div>
    )
}

export default Footer