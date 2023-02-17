
import './App.css'
import Main from './component/main'
import Header from './component/header'
import ShoppingCart from './component/shoppingCart'
import { useState } from 'react'

function App() {

  const [showModal, setShowModal] = useState(false)
  return (
    <div className='app'>
      <Header showModal={showModal} setShowModal={setShowModal}/>
      <Main/>
      <div className='cart container'>
      {showModal && <ShoppingCart showModal={showModal} setShowModal={setShowModal}/>}

      </div>
    </div>
  )
}

export default App
