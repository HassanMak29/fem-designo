import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import WebDesign from './pages/WebDesign.tsx'
import GraphicDesign from './pages/GraphicDesign.tsx'
import AppDesign from './pages/AppDesign.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Locations from './pages/Locations.tsx'
import ContactUs from './pages/ContactUs.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Home />, index: true },
      { path: 'web-design', element: <WebDesign /> },
      { path: 'app-design', element: <AppDesign /> },
      { path: 'graphic-design', element: <GraphicDesign /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'locations', element: <Locations /> },
      { path: 'contact-us', element: <ContactUs /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
