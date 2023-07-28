import { ChangeEventHandler, MouseEventHandler } from 'react'
import { Button } from './components/Button'
import { UserContextProvider } from './components/context/UserContext'
import { CounterReducer } from './components/hooks/CounterReducer'
import { InputRef } from './components/hooks/InputRef'
import { Input } from './components/Input'
import { User } from './components/User'
import './style.css'

export const App = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('Clicked', event.target)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event?.target.value)
  }
  return (
    <UserContextProvider>
      <div>
        <h1>React + TS</h1>

        <User />

        <CounterReducer />

        <Button onClick={handleClick}>
          <p>Click me!</p>
        </Button>

        <Input name="name" id="name" label="Name" onChange={handleChange} />
        <InputRef />
      </div>
    </UserContextProvider>
  )
}
