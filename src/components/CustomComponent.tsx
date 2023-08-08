import { ComponentProps } from 'react'
import { Greeting } from './Greeting'

type CustomComponentProps = ComponentProps<typeof Greeting>

export const CustomComponent = ({ content }: CustomComponentProps) => {
  return <div>{content}</div>
}
