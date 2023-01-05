import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Windsor, Ontario
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Canada
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Email: joboa2015@gmail.com
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact