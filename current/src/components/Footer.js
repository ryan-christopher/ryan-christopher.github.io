import React from 'react'
import { IoLogoGithub } from 'react-icons/io';
import "../styles/footer.css"

function Footer() {
    return (
        <div>
            <div className="flex-container">
                <div className="flex-item-left">
                    <div className="flex-container-social">
                        <a href="https://github.com/ryan-christopher/" rel="noreferrer" target="_blank"><IoLogoGithub className="social-link" id="github" />
                        </a>
                    </div>
                </div>
                <div className="flex-item-right">
                    <h3 className="footertext">REC</h3>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Footer