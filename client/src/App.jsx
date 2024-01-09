
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {

  return (
    <div>
     {/* Header */}
      <Header/>
      <div className='w-10/12 mx-auto'><Outlet/></div>
      <Footer/>

      {/* Footer */}
    </div>
  )
}

export default App
