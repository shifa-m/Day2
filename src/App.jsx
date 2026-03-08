import React from 'react'
import Home from './Components/Section1/Home'
import Content from './Components/Section2/Content'
import Header from './Components/Section3/Header'


const App = () => {
  return (
    <div className='bg-black bg-[url(https://images.pexels.com/photos/33715742/pexels-photo-33715742.jpeg)] bg-cover bg-center overflow-x-hidden overflow-y-hidden'>
      <Home/>
      <Content/>
      <Header/>
    </div>
  )
}

export default App
