import { ElementType, ReactNode } from 'react'

interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: ReactNode
  as?: ElementType
}

export const Text = ({ size, color, children, as }: TextProps) => {
  const Component = as || 'div'
  return <Component className={`${color} ${size}`}>{children}</Component>
}
