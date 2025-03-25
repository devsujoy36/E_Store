
import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Login from './Components/Login/Login'
import Pricing from './Components/Pricing/Pricing'
import Registration from './Components/Registration/Registration'

function App() {

  return (
    <>
      <div className='font-poppins'>
        <Header />
        <Hero />
        <About />
        <Pricing/>
        <Registration/>
        <Login />
        <Footer />
      </div>
    </>
  )
}

export default App
