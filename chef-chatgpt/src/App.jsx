import React from "react"

import Header from "./components/Header.jsx"
import "./UI/header.css"
import MainContent from "./components/MainContent.jsx"
import "./UI/maincontent.css"
import Recipe from "./components/Recipe.jsx"

export default function App(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}