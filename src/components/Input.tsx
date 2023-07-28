// import { ChangeEvent } from 'react'

import { ChangeEventHandler } from 'react'

interface InputProps {
  readonly type?: 'text' | 'checkbox' | 'radio'
  readonly label: string
  readonly name: string
  readonly id: string
  readonly isDisabled?: boolean
  readonly onChange: ChangeEventHandler
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
