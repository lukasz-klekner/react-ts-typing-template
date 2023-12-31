import { useReducer } from 'react'

type CounterState = {
  readonly count: number
}

type UpdateAction = {
  readonly type: 'increment' | 'decrement'
  readonly payload: number
}

type ResetAction = {
  readonly type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
