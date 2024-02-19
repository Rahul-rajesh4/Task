import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Cart from './components/Page/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Cart />}/>
        

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
