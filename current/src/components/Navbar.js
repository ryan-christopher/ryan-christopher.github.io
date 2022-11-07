import React from 'react'
import '../styles/Menu.css';
import $ from 'jquery'

function Navbar() {
    let links;

    links =
        <div>
            <a href="#home" className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" onClick={menutoggle()}>Home</a>
            <a href="#about" className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" onClick={menutoggle()}>About</a>
            <a href="#portfolio" className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" onClick={menutoggle()}>Projects</a>
            <a href="#contact" className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" onClick={menutoggle()}>Contact</a>
        </div>

    return (
        <div>
            <h3 id="headername" className='text-[#171717] dark:text-[#f9f5e9] ease-in duration-200 uppercase'>Ryan Christopher</h3>

            <div className="mobilenavbar bg-[#dfd5c1b3] dark:bg-[rgba(0,0,0,0.5)] backdrop-blur-sm ease-in duration-200">
            </div>

            <div className="mobilemenu bg-[#f9f5e9] dark:bg-[#171717]">
                <div className="mobilebutton">
                    <div className="burgertop bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200"></div>
                    <div className="burgermiddle bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200"></div>
                    <div className="burgerbottom bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200"></div>
                </div>
                <div className="mobilemenu-body bg-[#f9f5e9] dark:bg-[#171717]">
                    <div className='mobilebuttonclose absolute top-[20px] right-[22px] font-["Atami_Display"] text-[35px] 
                    text-red-400 hover:cursor-pointer hover:scale-[1.25] border-[1.5px] w-[45px] h-[45px] bg-transparent text-center 
                    border-[#171717] dark:border-[#dfd5c1] leading-[1.2] rounded-sm ease-in duration-100 z-10'>
                        X
                    </div>
                    <div className="mobilemenu-overlay"></div>
                    <div className="mobilemenu-container">
                        {links}
                    </div>
                </div>
            </div>
            <div className="mask"></div>
        </div >
    )
}

function menutoggle() {
    $('.mobilemenu').toggleClass('active');
    $('.mask').toggleClass('active')
    $('.mobilebutton').toggleClass('active');
}

(function () {
    $(document).on("click", ".mobilemenu-group", function () {
        $(".mobilemenu-overlay").toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-link", function () {
        $('.mobilemenu').toggleClass('active');
        $('.mask').toggleClass('active')
        $('.mobilebutton').toggleClass('active');
    });
    $(document).on("click", ".mobilebutton", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilebuttonclose", function () {
        $('.mobilebutton').toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-overlay", function () {
        $(this).toggleClass('active');
    });
    $(document).on("click", ".mask", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        $('.mobilebutton').toggleClass('active');
        return $(".mobilemenu-overlay").removeClass('active');
    });
}).call(this);

export default Navbar