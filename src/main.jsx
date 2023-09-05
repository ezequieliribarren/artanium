import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import Root from './Routes/Root';
import Subli from './Routes/Subli';
import Dtf from './Routes/Dtf';

const router = createHashRouter([
  {
    path: "/",
    element: <Root/>
  },
  {
    path: "/sublimacion",
    element: <Subli/>
  },
  {
    path: "/dtf",
    element: <Dtf/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
