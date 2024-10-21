import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from './pages/NotFoundPage';
import FormSuccessPage from './pages/formSuccessPage';
import './index.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/form/success' element={<FormSuccessPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </>
    )
  );
  return <RouterProvider router={router} />
}

export default App
