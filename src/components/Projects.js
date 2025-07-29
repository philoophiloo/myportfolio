import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: 'CargoFlow',
      desc: 'Transform your maritime logistics with our comprehensive platform. Manage ships, cargo, crew, and ports with unprecedented efficiency and real-time visibility.',
      tech: ['Reactjs', 'Tailwind CSS','Mysql','Laravel'],
      gradient: 'from-purple-600 to-pink-600',
      link: 'http://cargovercel-ew3izu5e9-philemons-projects-b1e45a87.vercel.app' // Add your Vercel link here
    },
     {
      title: 'Startpoint',
      desc: ['Automating job,internship applications in the public service sector ',
      'StartPoint is the all-in-one portal connecting students with career-defining internships.'],
      tech: ['React.js', 'Tailwind CSS', 'Mysql', 'Laravel'],
      gradient: 'from-green-600 to-blue-600',
      link: 'http://startpointvercel-bi7fp6olm-philemons-projects-b1e45a87.vercel.app' // Add your Vercel link here
    },
    {
      title: 'Converge',
      desc: 'Seamlessly manage Contacts, Organizations, and Industries.',
      tech: ['React.js', 'Tailwind CSS', 'Mysql','Laravel'],
      gradient: 'from-green-600 to-blue-600',
      link: 'http://convergevercel-hrm1t0rja-philemons-projects-b1e45a87.vercel.app' // Add your Vercel link here
    }
   
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    {/* Wrap the SVG in an <a> tag and add the link */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} project`}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;