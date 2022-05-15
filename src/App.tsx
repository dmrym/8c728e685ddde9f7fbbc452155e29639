import { Routes, Route, HashRouter } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </HashRouter>
  );
}