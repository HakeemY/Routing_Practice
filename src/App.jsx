import './App.css';
import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <div>
      <h1>Routing Practice</h1>
      
      <div>
        <NavLink to='/home'></NavLink>
        <NavLink to='/:number'></NavLink>
        <NavLink to='/:hello'></NavLink>
        <NavLink to='hello/:textColor/:divColor'></NavLink>
      </div>
    </div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:number' element={<Number/>}/>
        <Route path='/hello' element={<Word/>}/>
        <Route path='/hello/:textColor/:divColor' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;