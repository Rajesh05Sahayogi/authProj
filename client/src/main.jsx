import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import store from './stores/store.js'
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/dashbord",
        element:<Dashboard/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
