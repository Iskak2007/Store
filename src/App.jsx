import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/JsxFiles/header'
import Shop from './components/JsxFiles/shop'
import Korzina from './components/JsxFiles/korzina'
import Admin from './components/JsxFiles/adminPage'
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/korzina' element={<Korzina/>}/>
      </Routes>
    </>
  )
}

export default App
