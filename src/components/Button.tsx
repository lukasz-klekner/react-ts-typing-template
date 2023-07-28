import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button'
  children: ReactNode
  isDisabled?: boolean
  onClick: MouseEventHandler
}

export const Button = ({
  type = 'submit',
  children,
  isDisabled = false,
  onClick,
}: ButtonProps) => (
  <button type={type} disabled={isDisabled} onClick={onClick}>
    {children}
  </button>
)
