import logo from './logo.svg';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Imagens from './paginas/imagens/imagens';
import Header from './paginas/herder/herder';
import Sobre from './paginas/sobre/sobre';
import Home from './paginas/home/home';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/imagens'  element={<Imagens/>}/>
    <Route path='/sobre'  element={<Sobre/>}/>
    </Routes>
    </Router>
  );
}

export default App;
