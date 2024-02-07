import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import OtherProjects from './components/Projects/OtherProjects'

function App() {
  const [language, setLanguage] = useState("english");

  let subtitles = {
    "english": "Senior computer engineering student at Bilkent set to graduate in 2025.",
    "turkish": "Bilkent Bilgisayar Mühendisliği son sınıf öğrencisi, 2025 mezunu."
  }

  return <>
    <Header subtitleVsLanguages={subtitles} language={language} setLanguage={setLanguage}/>
    <Projects language={language}/>
    <OtherProjects language={language}/>
  </>
}

export default App
