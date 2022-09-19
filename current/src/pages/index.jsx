import React from 'react'
import Footer from '../components/Footer'
import "../styles/App.css"
import "../styles/index.css"
//import { Scrollbar } from 'smooth-scrollbar-react';




function index() {
    return (
        <div className='bg-white dark:bg-black ease-in duration-200'>
            {/*
            <div style={{ display: 'flex', maxHeight: '100vh' }}>
                <Scrollbar
                    damping={0.08}
                >
    */}
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <div className="content bg-white dark:bg-black ease-in duration-200">
                <img src="headerpic.jpg" alt="My portrait." id="headerpic" />
                <h2 id="introtext" className='text-black dark:text-white ease-in duration-200'>Hi, I'm Ryan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque aliquid quam ipsum blanditiis, velit eius illum quas voluptatem fugiat molestias dolorum reiciendis, laboriosam iste, officia voluptate ut modi. Iusto.</p>
            </div>
            <Footer />
            {/*
                </Scrollbar>
                                </div>
        */}</div>
    )
}

export default index