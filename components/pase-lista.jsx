import { Description, Field, Label } from '@headlessui/react'
import CuadroTexto from './textarea.jsx'
import Selector from './paises.jsx'
import clsx from 'clsx'

export default function PaseLista() {
  return (
    <div className="w-full max-w-md p-10 border-2 border-white/20 rounded-lg bg-blue-600">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Pase de Lista</Label>
        <Description className="text-sm/6 text-white/80">Seleccione con PFG la asistencia y con AFG la Inasistencia</Description>
        <div className="relative py-6">

            <div className='bg-blue-900 py-10 px-4 rounded-lg mb-10'>
                <Description className="text-sm/6 text-white/80">Profesor: Octavio Ramirez</Description>
                <Selector />
                <CuadroTexto />
            </div>

            <div className='bg-blue-900 py-10 px-4 rounded-lg mb-10'>
                <Description className="text-sm/6 text-white/80">Profesor: Juan Manuel Ucan</Description>
                <Selector />
                <CuadroTexto />
            </div>

            <div className='bg-blue-900 py-10 px-4 rounded-lg mb-10'>
                <Description className="text-sm/6 text-white/80">Profesor: Raul Ramirez</Description>
                <Selector />
                <CuadroTexto />
            </div>

            <div className='bg-blue-900 py-10 px-4 rounded-lg mb-10'>
                <Description className="text-sm/6 text-white/80">Profesor: David Nochebuena</Description>
                <Selector />
                <CuadroTexto />
            </div>

            <div className='bg-blue-900 py-10 px-4 rounded-lg mb-10'>
                <Description className="text-sm/6 text-white/80">Profesor: Luis Moreno Lailson</Description>
                <Selector />
                <CuadroTexto />
            </div>

        </div>
      </Field>
    </div>
  )
}
