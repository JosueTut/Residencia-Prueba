import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export default function Selector() {
  return (
    <Select
        className={clsx(
        'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',                  
        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',                  
        // Make the text of each option black on Windows                  
        '*:text-black'                    
        )}                
    >
        <option value="active">AFG</option>
        <option value="paused">PFG</option>
    </Select>
    
  )
}
