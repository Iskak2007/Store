import './App.css'
// import { Routes, Route } from 'react-router-dom'
// import Header from './components/JsxFiles/header'
// import Shop from './components/JsxFiles/shop'
// import Korzina from './components/JsxFiles/korzina'
// import Admin from './components/JsxFiles/adminPage'
// import Singin from './components/JsxFiles/singin'
// import Singup from './components/JsxFiles/singup'
function App() {

  return (
    <>
    {/* <h1 className="text-red-700" >LOL</h1>
    <Header/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/korzina' element={<Korzina/>}/>
        <Route path='/singup' element={<Singin/>}/>
        <Route path='/singin' element={<Singup/>}/>
      </Routes> */}
      <div className='flex items-center, justify-center'>
        <div className='rounded-xl, border-black-700'>
            <h1>Поможем подобрать лучший дом</h1>
            <h2>Запутались с выбором дома?
                Подберем для Вас
                дом за 3 минуты!</h2>
            <button>Подобрать тариф</button>
        </div>
      </div>
    </>
  )
}

export default App
