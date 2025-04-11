import React from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { getGitHubRepos, experienceData } from './utils/api'
import Navigation from './components/Navigation'
import AnimatedSection from './components/AnimatedSection'

export default async function Home() {
  const repos = await getGitHubRepos()

  return (
    <div className="container py-12">
      <Navigation />
      
      {/* Introduction */}
      <AnimatedSection className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4">Ahyana Rizky</h1>
        <p className="text-xl text-gray-300">Software Developer</p>
      </AnimatedSection>

      {/* About Me */}
      <AnimatedSection id="about" className="mb-20">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p className="text-lg">
            I'm a passionate software developer with experience in building modern web applications.
            I enjoy solving complex problems and creating efficient, user-friendly solutions.
          </p>
        </div>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection id="projects" className="mb-20">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.name} className="card">
              <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
              <p className="text-gray-300 mb-4">{repo.description || 'No description available'}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map((topic) => (
                  <span key={topic} className="px-2 py-1 bg-gray-700 rounded text-sm">
                    {topic}
                  </span>
                ))}
              </div>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center"
              >
                View Project <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" className="mb-20">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git', 'Docker'].map((skill) => (
            <div key={skill} className="card text-center">
              <CodeBracketIcon className="w-6 h-6 mx-auto mb-2" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection id="experience" className="mb-20">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-bold">{exp.title}</h3>
              </div>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.dateRange}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="card">
          <div className="flex items-center mb-4">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            <a href="mailto:your.email@example.com" className="hover:text-[var(--neon-blue)]">
              your.email@example.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/ahyanarizky" target="_blank" rel="noopener noreferrer" className="btn-primary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ahyanarizky/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
} 
