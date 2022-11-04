import React from 'react'
import '../styles/Menu.css';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import Preloader from './Preloader';

function Navbar() {
    let links;

    links =
        <div>
            <Link className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" to="/" onClick={() => { Preloader(); menutoggle(); }}>Home</Link>
            <Link className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" to="/portfolio" onClick={() => { Preloader(); menutoggle(); }}>Portfolio</Link>
            <Link className="mobilemenu-link text-[#171717] dark:text-[#f9f5e9]" to="/about" onClick={() => { Preloader(); menutoggle(); }}>About Me</Link>
        </div>

    return (
        <div>
            <h3 id="headername" className='text-[#171717] dark:text-[#f9f5e9] ease-in duration-200'>RYAN CHRISTOPHER</h3>

            <div className="mobilenavbar bg-[#dfd5c1b3] dark:bg-[rgba(0,0,0,0.5)] backdrop-blur-sm ease-in duration-200">
            </div>

            <div className="mobilemenu bg-[#f9f5e9] dark:bg-[#171717]">
                <div className="mobilebutton">
                    <div className="burgertop bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200"></div>
                    <div className="burgermiddle bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200"></div>
                    <div className="burgerbottom bg-[#171717] dark:bg-[#f9f5e9] ease-in duration-200"></div>
                </div>
                <div className="mobilemenu-body bg-[#f9f5e9] dark:bg-[#171717]">
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
        $(this).find(".mobilemenu-section").toggleClass('active');
        $(".mobilemenu-overlay").toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-link-back", function () {
        $(".mobilemenu-section").toggleClass('active');
    });
    $(document).on("click", ".mobilebutton", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-overlay", function () {
        $(this).toggleClass('active');
        return $(".mobilemenu-section").removeClass('active');
    });
    $(document).on("click", ".mask", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        $('.mobilebutton').toggleClass('active');
        $(".mobilemenu-overlay").removeClass('active');
        return $(".mobilemenu-section").removeClass('active');
    });
}).call(this);

export default Navbar