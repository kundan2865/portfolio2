import React from 'react'
import { assets } from '../assets/assets'

const Projects = () => {

  const projects=[
    {
      id:1,
      name:"Employee MS",
      technologies:"MERN Stack",
      image:assets.lap1,
      github:"dhjfbef efhedkjned"
    },
    {
      id:2,
      name:"Blog App",
      technologies:"MERN Stack",
      image:assets.lap4,
      github:"dhjfbef efhedkjned"
    },
    {
      id:3,
      name:"Book MS",
      technologies:"MERN Stack",
      image:assets.lap5,
      github:"dhjfbef efhedkjned"
    }
  ]
  return (
    <div className='bg-black text-white py-20 ' id='project'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project)=>(
            <div key={project.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg
              transform transition duration-300 hover:scale-105'>
              <img src={project.image} className='rounded-lg mb-4 w-full h-48 object-cover'></img>
              <h3 className='text-2xl font-bold mb-4'>{project.name}</h3>
              <p className='text-gray-400 mb-4'>{project.technologies}</p>
              <a href="" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden 
            md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
