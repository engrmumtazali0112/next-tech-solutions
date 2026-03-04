import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home         from './pages/Home'
import About        from './pages/About'
import Services     from './pages/Services'
import Team         from './pages/Team'
import Testimonials from './pages/Testimonials'
import Contact      from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="noise-overlay" />
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/"             element={<Home />}         />
          <Route path="/about"        element={<About />}        />
          <Route path="/services"     element={<Services />}     />
          <Route path="/team"         element={<Team />}         />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact"      element={<Contact />}      />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
