import { ChangeEventHandler, MouseEventHandler } from 'react'
import { Button } from './components/Button'
import { UserContextProvider } from './components/context/UserContext'
import { CustomButton } from './components/CustomButton'
import { DisplayGreetingComponent } from './components/DisplayGreeting'
import { Greeting } from './components/Greeting'
import { CounterReducer } from './components/hooks/CounterReducer'
import { InputRef } from './components/hooks/InputRef'
import { Input } from './components/Input'
import { List } from './components/List'
import { RandomNumber } from './components/RandomNumber'
import { Text } from './components/Text'
import { Toast } from './components/Toast'
import { User } from './components/User'
import './style.css'

const ITEMS = [
  {
    id: 1,
    name: 'Luki',
  },
  {
    id: 2,
    name: 'Greg',
  },
]

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

        <DisplayGreetingComponent component={Greeting} />

        <RandomNumber value={5} isPositive />
        <RandomNumber value={-5} isNegative />

        <CustomButton variant="primary" onClick={() => console.log('clicked')}>
          Primary button
        </CustomButton>

        <Toast position="center" />

        <Toast position="left-center" />

        <User />

        <List items={ITEMS} onClick={(item) => console.log(item)} />

        <CounterReducer />

        <Button onClick={handleClick}>
          <p>Click me!</p>
        </Button>

        <Input name="name" id="name" label="Name" onChange={handleChange} />
        <InputRef />

        <Text as="label" htmlFor="Siemka">
          new
        </Text>
      </div>
    </UserContextProvider>
  )
}
