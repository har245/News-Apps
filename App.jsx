import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'


export default function App() {
  let[language,setLanguage]=useState("hi")
  let[search,setSearch]=useState("")

  function changeLanguage(input) {
    setLanguage(input)
  }
 function changeSearch(input){
    setSearch(input)
  }
 
    return (
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
        <Routes>
          <Route path='' element={<Home search={search}  language={language} q="All" />} />
          <Route path='/all' element={<Home search={search} language={language} q="All" />} />
          <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
          <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
          <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
          <Route path='/Entertainment' element={<Home search={search} language={language} q="Entertainment" />} />
          <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
          <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
          <Route path='/Sport' element={<Home search={search} language={language} q="Sport" />} />
          <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
          <Route path='/Olympics' element={<Home search={search} language={language} q="Olympics" />} />
          <Route path='/Economics' element={<Home search={search} language={language} q="Economics" />} />
          <Route path='/Health' element={<Home search={search} language={language} q="Health" />} />
          <Route path='/Wealth' element={<Home search={search} language={language} q="Wealth" />} />
          <Route path='/World' element={<Home search={search} language={language} q="World" />} />
          <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

