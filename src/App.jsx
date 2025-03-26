import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header.jsx'
import Banner from './component/Banner/Banner.jsx'
import Body from './component/Body/Body.jsx'
import Body1 from './component/Body/Body1.jsx'
import Footer from './component/Footer/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="header-app">
        <Header />
      </div>
      <div className="banner-app">
        <Banner />
        <Body />
        <Body1 />
        <Body />
      </div>
      <div className="Footer-app">
        <Footer />
      </div>

    </div>
    
    </>
  )
}

export default App
