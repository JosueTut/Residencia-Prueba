import Edificio from '../components/edificio';
import Fieldset from '../components/fieldset';
import Textareaa from '../components/textarea';
import { Button } from "@/components/ui/button"

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

        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>New Button</Button>
        </div>

      </div>
    </>
  )
}

export default App
