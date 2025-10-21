
function App() {

  const handleClick = () => {
    window.open('https://github.com/JosueTut/Residencia-Prueba', '_blank');
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="bg-stone-950 text-stone-50 w-full sm:bg-blue-500 sm:w-sm md:bg-green-500 md:w-md lg:bg-yellow-500 xl:bg-red-500 2xl:bg-purple-500">
        Hola Mundo
      </div>
      <div className='h-3/4 flex flex-col items-center justify-center'>
        <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer'>
          Edificio 1
        </div>

        <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer'>
          Edificio 2
        </div>

        <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer'>
          Edificio 3
        </div>

        <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer'>
          Edificio 4
        </div>

        <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer'>
          Edificio 5
        </div>

        <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer'>
          Edificio 6
        </div>
      </div>
    </>
  )
}

export default App
