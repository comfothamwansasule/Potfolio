import React from 'react'
import AppRouters from './routes/AppRouters'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-black/90 min-h-screen px-3 md:px-6 lg:px-8  xl:px-24 2xl:px-48'>
      <Navbar/>
      <AppRouters/>
    </div>
  )
}

export default App