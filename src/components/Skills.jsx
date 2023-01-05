import React from 'react'

const Skills = () => {
  let databases = [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ]

  let frameworks = [
    { name: "Django" },
    { name: "Flask" },
    { name: "Express" },
    { name: "React" },
    { name: "TailwindCSS" },
  ]
  return (
    <section id="skills" className="text-gray-800 bg-blue-100 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-800">
            Skills
          </h1>

          <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
            <div className='flex-1 md:w-1/2 w-5/6 lg:flex-auto lg:w-7/12 pb-5'>
              <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base pb-4 font-bold">
                Languages
              </h3>
              <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">HTML5</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style={{ width: "95%" }}></div>
              </div>
              <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">CSS</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: "80%" }}></div>
              </div>
              <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">JavaScript</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">Python</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style={{ width: "77%" }}></div>
              </div>
              <div className="mb-1 text-base font-medium text-indigo-700 dark:text-gray-500">MATLAB</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-gray-500" style={{ width: "75%" }}></div>
              </div>
              <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Node.JS</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{ width: "60%" }}></div>
              </div>
              
            </div>
            <div className='flex-1 md:w-1/2 w-5/6  lg:flex-auto lg:w-7/12'>
              <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold pb-2 ">
                Frameworks/Libraries
              </h3>
              <ul className='pb-4'>
                {
                  frameworks.map((fw) => (
                    <li key={fw.name}>
                      {fw.name}
                    </li>
                  ))
                }
              </ul>

              <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold pb-2 ">
                Database
              </h3>
              <ul>
                {
                  databases.map((db) => (
                    <li key={db.name}>
                      {db.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Skills