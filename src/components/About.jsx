import React from 'react'
import joboa from '../images/joboa.jpg'
import Boamah from '../images/Boamah-resume-developer.pdf'

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hi, I'm John ...
            {/* <br className="hidden lg:inline-block" />I love to building apps and reading about new technologies. */}
          </h1>
          <p className="mb-8 leading-relaxed text-gray-800">
            ... A Christian, Researcher, Student, Programmer, Full-Stack Developer and an Aspiring Professor Emeritus. 
            I love building apps and enjoy coding. My specialities are in Fluid Mechanics, Scientific Computation, Web development and Data Science
          </p>
          <div className="flex justify-center">
            <a
              href={Boamah}
              className="inline-flex text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
              Resume
            </a>
            <a
              href="https://github.com/Joboa"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Github
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="joboa"
            src={joboa}
          />
        </div>
      </div>
    </section>
  )
}

export default About