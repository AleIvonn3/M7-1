import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Blockpage from './pages/block'

function App() {

  return (
    <div>
      <h1>Partes-Ramas</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/block' element={<Blockpage/>}/>
      </Routes>
    </div>
    
  )
}

export default App
