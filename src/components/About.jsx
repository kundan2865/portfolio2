import React from 'react';
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={assets.hero} alt="" className='w-72 h-100 rounded mb-8 md:mb-0 mt-2'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8 '>I am a passionate full-stack developer with a focus on building 
                        modern and responsive web applications. With a strong foundation 
                        in both frontend and backend technologies, I strive to create 
                        seamless and efficient user experiences.
                    </p>

                    <div className='space-y-4'>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcass" className='w-2/12'>HTML &CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                    transform transition-transform duration-300 hover:scale-105 rounded-full w-11/12'>

                                </div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="htmlandcass" className='w-2/12'>React Js</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                    transform transition-transform duration-300 hover:scale-105 rounded-full w-11/12'>

                                </div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="htmlandcass" className='w-2/12'>Node Js</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                    transform transition-transform duration-300 hover:scale-105 rounded-full w-9/12'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="htmlandcass" className='w-2/12'>Spring Boot</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                    transform transition-transform duration-300 hover:scale-105 rounded-full w-8/12'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="htmlandcass" className='w-2/12'>Java</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                    transform transition-transform duration-300 hover:scale-105 rounded-full w-10/12'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to blue-500'>3+</h3>
                            <p>Years Experience</p>
                        </div>

                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to blue-500'>50+</h3>
                            <p>Projects Completed</p>
                        </div>

                        <div >
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to blue-500'>10+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
