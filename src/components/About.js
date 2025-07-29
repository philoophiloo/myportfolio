import React from 'react';

const About = () => (
  <section id="about" className="py-20 px-6 bg-slate-800/50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a results-driven Fullstack Web Developer with a passion for building efficient, responsive, and user-friendly digital experiences. I specialize in crafting modern frontend interfaces using React.js and Tailwind CSS, while also developing robust and scalable backends with Laravel (PHP) and Node.js. With hands-on expertise in MySQL database design, I ensure data integrity and performance across web applications. Beyond development, I'm skilled in system and network administration, including Windows/Linux environments, network configuration (CCNA), data backups, and system optimization. I thrive in collaborative environments and bring a detail-oriented mindset to every project I build or support.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            With a keen eye for detail and a love for clean, efficient code,
            I create digital experiences that not only look great but perform exceptionally.
          </p>
          <div className="flex space-x-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">2+</div>
              <div className="text-slate-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-slate-400">Passion</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl transform rotate-6 opacity-20"></div>
          <div className="absolute inset-0 w-80 h-80 mx-auto bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-end justify-center">
              <img
                src="/phil5.png"
                alt="Professional profile"
                className="object-contain w-full h-full rounded-2xl z-10"
              />
              <div className="absolute bottom-2 w-28 h-4 bg-black/30 rounded-full blur-md z-0"></div> {/* Shadow */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;