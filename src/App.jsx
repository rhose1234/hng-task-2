import { useState } from 'react'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
