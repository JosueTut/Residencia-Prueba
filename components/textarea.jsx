import { Description, Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'

export default function CuadroTexto() {
  return (
    <div className="w-full max-w-md py-5">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Otra Razón</Label>
        <Description className="text-sm/6 text-white/50">Explica brevemente porque no asistió el docente</Description>
        <Textarea
          className={clsx(
            'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
          rows={3}
        />
      </Field>
    </div>
  )
}
