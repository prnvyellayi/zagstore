import './App.css';
import {Routes, Route} from 'react-router-dom'
import Settings from './routes/settings';
import Home from './routes/home';
import Cart from './routes/cart';
import Likes from './routes/likes';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/likes' element={<Likes />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
