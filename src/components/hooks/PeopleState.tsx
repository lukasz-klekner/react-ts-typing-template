import { useState } from 'react'

interface People {
  name: string
  age: number
}

const PEOPLE: People[] = [
  {
    name: 'Greg',
    age: 29,
  },
  {
    name: 'Łuki',
    age: 29,
  },
]

export const PeopleState = () => {
  const [people, setPeople] = useState<People[] | []>(PEOPLE)

  const addNewPerson = (person: People) => {
    setPeople((prevState) => [...prevState, person])
  }

  return (
    <div>
      <ul>
        {people.map(({ name, age }) => (
          <li key={name}>
            {name} - {age}
          </li>
        ))}
      </ul>

      <button onClick={() => addNewPerson}>Add new person</button>
    </div>
  )
}
