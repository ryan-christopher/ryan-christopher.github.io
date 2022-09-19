import React from 'react'
import '../styles/Menu.css';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import Preloader from './Preloader';

function Navbar() {
    let links;

    links =
        <div>
            <Link className="mobilemenu-link text-black dark:text-white" to="/" onClick={() => { Preloader(); menutoggle(); }}>Home</Link>
            <Link className="mobilemenu-link text-black dark:text-white" to="/portfolio" onClick={() => { Preloader(); menutoggle(); }}>Portfolio</Link>
            <Link className="mobilemenu-link text-black dark:text-white" to="/about" onClick={() => { Preloader(); menutoggle(); }}>About Me</Link>
        </div>





    return (
        <div>
            <h3 id="headername" className='text-black dark:text-white ease-in duration-200'>Ryan Christopher</h3>

            <div className="mobilenavbar bg-white dark:bg-black ease-in duration-200">
            </div>

            <div className="mobilemenu bg-white dark:bg-black">
                <div className="mobilebutton">
                    <div className="burgertop bg-black dark:bg-white ease-in duration-200"></div>
                    <div className="burgermiddle bg-black dark:bg-white ease-in duration-200"></div>
                    <div className="burgerbottom bg-black dark:bg-white ease-in duration-200"></div>
                </div>
                <div className="mobilemenu-body bg-white dark:bg-black">
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
    //$(".mobilemenu-group").click(function () {
    $(document).on("click", ".mobilemenu-group", function () {
        $(this).find(".mobilemenu-section").toggleClass('active');
        $(".mobilemenu-overlay").toggleClass('active');
    });
    //$("mobilemenu-link-back").click(function () {
    $(document).on("click", ".mobilemenu-link-back", function () {
        $(".mobilemenu-section").toggleClass('active');
    });
    //$('.mobilebutton').click(function () {
    $(document).on("click", ".mobilebutton", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    //$(".mobilemenu-overlay").click(function () {
    $(document).on("click", ".mobilemenu-overlay", function () {
        //$(".mobilemenu-overlay").on("click", function () {
        $(this).toggleClass('active');
        return $(".mobilemenu-section").removeClass('active');
    });
    //$('.mask').click(function () {
    $(document).on("click", ".mask", function () {
        //$('.mask').on("click", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        $('.mobilebutton').toggleClass('active');
        $(".mobilemenu-overlay").removeClass('active');
        return $(".mobilemenu-section").removeClass('active');
    });
}).call(this);

export default Navbar