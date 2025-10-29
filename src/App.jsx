import Edificio from '../components/edificio';
import Fieldset from '../components/fieldset';
import Textareaa from '../components/textarea';
import FlowbiteTable from '../components/table-flowbite';


function App() {

  return (
    <> 
      <div className='py-20 bg-stone-950 h-full flex flex-col items-center justify-center'>

        <Edificio />

        <Fieldset />

        <Textareaa />

        <FlowbiteTable />

      </div>
    </>
  )
}

export default App
