import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu'
import Awards from './Components/Awards/Awards'

function App() {
  return (
    <div id="app">
      <NavMenu />
      <Routes>
        <Route exact path='/' element={<Awards/>}/>
        <Route path='/awards' element={<Awards />}/>
      </Routes>
      <div id="content">
      </div>
    </div>
  );
}

export default App;
