import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Resume from './sections/resume/Resume';
import Error from './Error';
import Timeline from './sections/timeline/Timeline';
import Projects from './sections/projects/Projects';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App><Timeline/></App>,
    errorElement: <Error></Error>
  }, 
  {
    path: "/projects",
    element: <App><Projects/></App>,
    errorElement: <Error></Error>
  },
  {
    path:"/resume",
    element: <App><Resume/></App>,
    errorElement: <Error></Error>
  }, 
  {
    path:"/resume-printable",
    element: <Resume resumeType="printable" />,
    errorElement: <Error></Error>
  }
]

const productionRoutes: RouteObject[] = routes.map(r => ({
  path: `/jasstsg/${r.path}`,
  element: r.element,
  errorElement: r.errorElement
}));

const router = createHashRouter([ ...routes, ...productionRoutes])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
