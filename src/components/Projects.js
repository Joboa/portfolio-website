import React, {useEffect, useState} from 'react'
import ProjectCard from './ProjectCard'
import Pagination from './Pagination'
import { projects } from '../data'
// console.log(projects)

const Projects = () => {
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(2)

  // get images
  useEffect(() => {
  const getImages = () => setImages(projects)
  getImages()
  }, []);

  // console.log(images)

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage)
  // console.log(currentImages)

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are the apps I have built:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {currentImages.map((project) => (

            <ProjectCard
              key={project.id}
              link={project.link}
              image={project.image}
              subtitle={project.subtitle}
              title={project.title}
              description={project.description}
            />
          ))}
          <Pagination 
            imagesPerPage={imagesPerPage}
            totalImages={images.length}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects