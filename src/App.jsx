import Edificio from '../components/edificio';

function App() {

  const handleClick = () => {
    window.open('https://github.com/JosueTut/Residencia-Prueba', '_blank');
  }

  return (
    <>
      <p className="h-20 p-6 text-blue-800 text-center text-2xl font-bold">Edificios en el Instituto Tecnológico de Cancún</p>
      
      <div className='h-3/4 flex flex-col items-center justify-center'>
        <Edificio />

        <Edificio />

        <Edificio />

        <Edificio />

        <Edificio />

        <Edificio />
      </div>
    </>
  )
}

export default App
