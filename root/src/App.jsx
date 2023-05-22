import { Route, Routes } from 'react-router-dom';
import './App.css';
import Employees from './pages/Employees';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
