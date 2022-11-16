import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'

//paginas
import Home from './pages/Home';
import Event from './pages/Event';
import Error from './pages/Error';


function App() {
  return <Router>


    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/event/:id' element={<Event/>}/>
      <Route path='/error' element={<Error/>}/>
    </Routes>
  </Router>
}

export default App;
