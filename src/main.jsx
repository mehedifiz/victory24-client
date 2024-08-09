import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Authprovider from './Auth/Authprovider.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import Postblogs from './Pages/Postblog/Postblogs.jsx';
import Privateroute from './Auth/Private/Privateroute.jsx';
import Myblogs from './Pages/Myblogs/Myblogs.jsx';
import Updateblogs from './Pages/Updateblogs/Updateblogs.jsx';
import CoordinatorDetail from './Components/fetchAllCoordinators/CoordinatorDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/coordinators/:id',
        element:<CoordinatorDetail />,
        loader: ({ params }) => fetch(`http://localhost:4000/posts/${params.id}?type=Coordinator`),
      }
      ,
      {
        path: '/post-content',
        element: <Privateroute><Postblogs /></Privateroute>,
      },
      {
        path: '/my-blogs',
        element: <Privateroute><Myblogs /></Privateroute>,
      
      },{
        path: '/update-blog/:id',
        element:<Updateblogs></Updateblogs>,
        loader :({ params })=> fetch(`http://localhost:4000/allBloges/${params.id}`)
       
        }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
     
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </React.StrictMode>
    <ToastContainer />
    
  </div>
);
