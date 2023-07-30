import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Aos from 'aos'
import 'aos/dist/aos.css'

import 'react-toastify/dist/ReactToastify.min.css'

import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    })
  }, [])

  return (
    <BrowserRouter>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  )
}
