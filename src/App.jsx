import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';

import HomePage from './pages/HomePage';
const ContactPage = React.lazy(() => './pages/ContactPage');
const NotFoundPage = React.lazy(() => './pages/NotFoundPage');
const FormSuccessPage = React.lazy(() => './pages/FormSuccessPage');
import './index.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/form-success" element={<FormSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
