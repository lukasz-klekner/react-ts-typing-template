import { MouseEvent } from 'react'
import { Button } from './components/Button'
import './style.css'

export const App = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked', event.target)
  }
  return (
    <div>
      <h1>React + TS</h1>

      <Button onClick={handleClick}>
        <p>Click me!</p>
      </Button>
    </div>
  )
}
