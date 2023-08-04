export interface GreetingProps {
  readonly content: string
}

export const Greeting = ({ content }: GreetingProps) => {
  return <div>{content}</div>
}
