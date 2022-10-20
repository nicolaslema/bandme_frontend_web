

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//paginas
import Home from './pages/Home';
import Event from './pages/Event';


function App() {
  return <Router>


    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/event' element={<Event/>}/>
    </Routes>
  </Router>
}

export default App;
