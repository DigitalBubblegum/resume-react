import { useState } from 'react'
import './App.css'
import jsonData from '../db.json'
function App() {
  return (
    <div className='h-screen w-screen bg-gray-200 overflow-auto'>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>{jsonData.personalInfo.name}</h1>
      <div>{jsonData.personalInfo.email}</div>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>Education</h1>
      <div>{jsonData.education.college}{jsonData.education.yog}</div>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>Skills</h1>
      <div>{jsonData.skills.map(skill=><li key={skill}>{skill}</li>)}</div>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>Professional Experience</h1>
      <div>{jsonData.workx.map(work=><li key={work.my_leave}>{work.companyName}</li>)}</div>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>Projects</h1>
      <div>{jsonData.projects.map(project=>project.name)}</div>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>Certifications</h1>
      <div>{jsonData.certifications.map(certificate=>certificate.name)}</div>
      <h1 className='text-2xl text-center font-bold underline text-transform: uppercase'>Ongoing Learning</h1>
      <div>{jsonData.ongoingLearning.map(ol=>ol)}</div>
    </div>
  )
}

export default App
