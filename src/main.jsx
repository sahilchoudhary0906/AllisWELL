import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Body from './components/Body';
import Ronak from './components/Ronak';
import Peter from './components/Peter';
import Ellie from './components/Ellie.jsx';
import Sazia from './components/Sazia.jsx';
import ReadFiles from './components/ReadFiles.jsx';

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/ronak',
    element: <Ronak />,
  },
  {
    path: '/peter',
    element: <Peter />,
  },
  {
    path:'/Ellie',
    element:<Ellie/>
  },
  {
    path:"/Sazia",
    element:<Sazia/>
  },
  {
    path:"/ReadFiles",
    element:<ReadFiles/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router here */}
  </StrictMode>,
);
