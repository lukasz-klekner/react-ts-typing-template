import { ComponentType } from 'react'
import { GreetingProps } from './Greeting'

interface DisplayGreetingComponentProps {
  readonly component: ComponentType<GreetingProps>
}

export const DisplayGreetingComponent = ({
  component: Component,
}: DisplayGreetingComponentProps) => {
  return <Component content="Welcome back" />
}
