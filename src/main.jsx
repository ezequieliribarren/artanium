import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import Root from './Routes/Root';
import Subli from './Routes/Subli';
import Dtf from './Routes/Dtf';
import Transfer from './Routes/Transfer';
import Fotografico from './Routes/Fotografico';
import Ser_distribuidor from './Routes/Ser_distribuidor';
import Donde_comprar from './Routes/Donde_comprar';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/sublimacion",
    element: <Subli />
  },
  {
    path: "/dtf",
    element: <Dtf />
  },
  {
    path: "/transfer",
    element: <Transfer />
  },
  {
    path: "/fotografico",
    element: <Fotografico />
  },
  {
    path: "/ser-distribuidor",
    element: <Ser_distribuidor />
  },
  {
    path: "/donde-comprar",
    element: <Donde_comprar/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
