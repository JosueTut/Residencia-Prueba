import Edificio from '../components/edificio';
import Checkbox from '../components/checkbox';
import Fieldset from '../components/fieldset';
import Comboboxx from '../components/combobox';
import Buttonn from '../components/button';

function App() {

  const handleClick = () => {
    window.open('https://github.com/JosueTut/Residencia-Prueba', '_blank');
  }

  return (
    <> 
      <div className='py-20 bg-stone-950 h-full flex flex-col items-center justify-center'>

        <Edificio />

        <Fieldset />

      </div>
    </>
  )
}

export default App
