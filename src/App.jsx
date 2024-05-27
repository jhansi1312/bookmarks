import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookMark from './components/BookMark'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookMarkList from './components/BookMarkList'
import BookMarkDet from './components/BookMarkDet'
 

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookMarkList/>}></Route>
        <Route path='/bookmark-list' element={<BookMarkList/>}></Route>
        <Route path='/bookmark/:topic' element={<BookMarkDet/>}></Route>
        <Route path='/add-bookmark' element={<BookMark/>}></Route>
        <Route path='/add-bookmark/:tit' element={<BookMark/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
