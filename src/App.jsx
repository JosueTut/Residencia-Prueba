import Edificio from '../components/edificio';
import Fieldset from '../components/fieldset';
import Pais from '../components/paises';
import { Route, Routes } from 'react-router';


function App() {

  return (
    <div> 
      <div className='py-20 bg-stone-950 h-full flex flex-col items-center justify-center'>

      <Fieldset />
      <Pais />

      </div>
    </ div>
  )
}

export default App
