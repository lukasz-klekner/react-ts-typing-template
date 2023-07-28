import { ChangeEventHandler, MouseEventHandler } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import './style.css'

export const App = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('Clicked', event.target)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event?.target.value)
  }
  return (
    <div>
      <h1>React + TS</h1>

      <Button onClick={handleClick}>
        <p>Click me!</p>
      </Button>

      <Input name="name" id="name" label="Name" onChange={handleChange} />
    </div>
  )
}
