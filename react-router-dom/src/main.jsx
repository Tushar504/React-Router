import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, useLoaderData } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import { User } from './components/User.jsx'
import { GitHubInfo, getUserInfo } from './components/GitHubInfo.jsx'

// const router = createBrowserRouter([
//   { path: '/', 
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/contact', element: <Contact /> },
//       { path: '/about', element:  <About /> },
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/user/:userId' element={<User/>}/>
       <Route 
       loader={getUserInfo}
       path='/github' 
       element={<GitHubInfo/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
