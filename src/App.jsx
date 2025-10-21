import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="bg-stone-950 text-stone-50 w-full sm:bg-blue-500 sm:w-sm md:bg-green-500 md:w-md lg:bg-yellow-500 xl:bg-red-500 2xl:bg-purple-500">
        Hola Mundo
      </div>
    </>
  )
}

export default App
