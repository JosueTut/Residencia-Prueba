import Edificio from '../components/edificio';
import Fieldset from '../components/fieldset';
import Textareaa from '../components/textarea';

function App() {

  const handleClick = () => {
    window.open('https://github.com/JosueTut/Residencia-Prueba', '_blank');
  }

  return (
    <> 
      <div className='py-20 bg-stone-950 h-full flex flex-col items-center justify-center'>

        <Edificio />

        <Fieldset />

        <Textareaa />

      </div>
    </>
  )
}

export default App
