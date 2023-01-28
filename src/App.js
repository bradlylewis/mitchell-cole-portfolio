import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu'
import Awards from './Components/Awards/Awards'

function App() {
  return (
    <div id="app">
      <NavMenu />
      <Routes>
        <Route exact path='/' element={<h1>Home Page</h1>}/>
        <Route exact path='/portfolio' element={<h1>Portfolio</h1>}/>
        <Route path='/awards' element={<Awards />}/>
        <Route exact path='/about' element={<h1>About Me</h1>}/>
        <Route exact path='/contact' element={<h1>Contact</h1>}/>
      </Routes>
      <div id="content">
      </div>
    </div>
  );
}

export default App;
