import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="bg-stone-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-red-500 2xl:bg-purple-500">
        Hola Mundo
      </div>
    </>
  )
}

export default App
