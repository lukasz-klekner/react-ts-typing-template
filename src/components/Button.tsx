import { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button'
  children: ReactNode
  isDisabled?: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
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
