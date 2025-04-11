import React from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { getGitHubRepos, experienceData } from './utils/api'
import Navigation from './components/Navigation'
import AnimatedSection from './components/AnimatedSection'
import Hero from './components/Hero'

export default async function Home() {
  const repos = await getGitHubRepos()

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Me */}
      <AnimatedSection id="about" className="py-20">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="card">
              <p className="text-lg text-text-secondary">
                I'm a passionate software developer with experience in building modern web applications.
                I enjoy solving complex problems and creating efficient, user-friendly solutions.
                My focus is on creating performant, accessible, and responsive applications that
                provide great user experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Web Development', 'UI/UX Design', 'Performance', 'Accessibility'].map((skill) => (
                <div key={skill} className="card text-center">
                  <CodeBracketIcon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection id="projects" className="py-20 bg-surface/50">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div key={repo.name} className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {repo.name}
                </h3>
                <p className="text-text-secondary mb-4">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span 
                      key={topic} 
                      className="px-2 py-1 bg-surface rounded-lg text-sm text-text-secondary"
                    >
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
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" className="py-20">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git', 'Docker'].map((skill) => (
              <div key={skill} className="card text-center group">
                <CodeBracketIcon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-primary transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection id="experience" className="py-20 bg-surface/50">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={index} className="card group">
                <div className="flex items-center mb-2">
                  <BriefcaseIcon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-text-secondary">{exp.company}</p>
                <p className="text-sm text-text-secondary/70">{exp.dateRange}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact" className="py-20">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="card max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <EnvelopeIcon className="w-6 h-6 mr-2 text-primary" />
              <a 
                href="mailto:your.email@example.com" 
                className="text-text-secondary hover:text-primary transition-colors"
              >
                your.email@example.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/ahyanarizky" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ahyanarizky/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
} 
