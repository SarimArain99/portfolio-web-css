import React from 'react'
import Detail from './components/detail/Detail'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Project'

function page() {
  return (
    <div>
      <Detail/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default page