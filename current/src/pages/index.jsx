import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/App.css"
import "../styles/index.css"

function index() {
    return (
        <div className='bg-white dark:bg-black ease-in duration-200'>
            <Navbar />
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
            </div>
            <Footer />
        </div>
    )
}

export default index