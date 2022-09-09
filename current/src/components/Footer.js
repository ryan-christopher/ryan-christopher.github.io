import React from 'react'
import { IoLogoGithub } from 'react-icons/io';
import "../styles/footer.css"

function Footer() {
    return (
        <div>
            <div className="flex-container text-black bg-white dark:text-white dark:bg-black ease-in duration-200">
                <div className="flex-item-left">
                    <div className="flex-container-social">
                        <a href="https://github.com/ryan-christopher/" rel="noreferrer" target="_blank"><IoLogoGithub className="social-link text-black dark:text-white ease-in duration-200" id="github" />
                        </a>
                    </div>
                </div>
                <div className="flex-item-right">
                    <h3 className="footertext">RC</h3>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Footer