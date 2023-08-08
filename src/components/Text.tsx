import { ComponentProps, ElementType, ReactNode } from 'react'

interface TextOwnProps<T extends ElementType> {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: ReactNode
  as?: T
}

type TextProps<T extends ElementType> = TextOwnProps<T> &
  Omit<ComponentProps<T>, keyof TextOwnProps<T>>

export const Text = <T extends ElementType = 'div'>({
  size,
  color,
  children,
  as,
}: TextProps<T>) => {
  const Component = as || 'div'
  return <Component className={`${color} ${size}`}>{children}</Component>
}
