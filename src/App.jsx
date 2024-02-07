import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const URL_BASE = "/cv"


const router = createHashRouter([
  { path: URL_BASE, element: <EnApp/>}, //english
  { path: URL_BASE + "/en", element: <EnApp/>}, //english
  { path: URL_BASE + "/tr", element: <TrApp/>}//,{ path: '/jp', element: <JpApp/>}
])

let subtitles = {
  "english": "Senior computer engineering student at Bilkent set to graduate in 2025.",
  "turkish": "Bilkent Bilgisayar Mühendisliği son sınıf öğrencisi, 2025 mezunu."
}

function App(){
  return <RouterProvider router={router} />;
}

function AppPrototype({language}) {
  return <>
    <Header subtitleVsLanguages={subtitles} language={language}/>
    <Projects language={language}/>
  </>
}

function EnApp() {
  return <AppPrototype language="english"/>
}

function TrApp() {
  return <AppPrototype language="turkish"/>

}

function JpApp(){
  return <AppPrototype language="japanese"/>
}

export default App
