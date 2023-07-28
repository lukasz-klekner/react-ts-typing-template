// import { ChangeEvent } from 'react'

import { ChangeEventHandler } from 'react'

interface InputProps {
  type?: 'text' | 'checkbox' | 'radio'
  label: string
  name: string
  id: string
  isDisabled?: boolean
  onChange: ChangeEventHandler
}

export const Input = ({
  type = 'text',
  label,
  name,
  id,
  isDisabled = false,
  onChange,
}: InputProps) => (
  <label htmlFor={id}>
    {label}
    <input
      type={type}
      name={name}
      id={id}
      disabled={isDisabled}
      onChange={onChange}
    />
  </label>
)
