import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Testmonies from '../pages/Testmonies'
import GetinTouch from '../pages/GetinTouch'
import RecentworkPage from '../pages/RecentworkPage'
import Casestudies from '../pages/Casestudies'

const AppRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/testmonies' element={<Testmonies/>}/>
            <Route path='/getinTouch' element={<GetinTouch/>}/>
            <Route path='/recentwork' element={<RecentworkPage/>}/>
            <Route path='/casestudies' element={<Casestudies/>}/>




        </Routes>
    </div>
  )
}

export default AppRouters