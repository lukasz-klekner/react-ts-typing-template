import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  readonly type?: 'submit' | 'reset' | 'button'
  readonly children: ReactNode
  readonly isDisabled?: boolean
  readonly onClick: MouseEventHandler
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
