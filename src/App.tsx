import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Cartdetail from './components/cart/Cartdetails';
import Categories from './components/categories/Categories';
import NotFound from './components/NotFound';
import Products from './components/products/Products';
import CreateProducts from './components/ProductCreate/CreateProducts';
import IdEditP from './components/products/IdEdit/IdEditP';
import Layout from './components/nav/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';

import RequireAuth from './components/Auth/RequireAuth';
import AuthProvider from './components/Auth/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="products" element={<Products />} />
              <Route path="categories" element={<Categories />} />
              <Route path="cartdetail" element={<RequireAuth><Cartdetail /></RequireAuth>} />
              <Route path="products/create" element={<RequireAuth><CreateProducts /></RequireAuth>} />
              <Route path="products/edit/:id" element={<RequireAuth><IdEditP /></RequireAuth>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;