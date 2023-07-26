import "./style.css"
import IMAGE from './react-logo.jpeg'
import { Counter } from "./Counter"

export const App = () => {
    return (
        <div>
            <h1>Edit: React Typescript Webpack Starter Template {process.env.name}</h1>
            <img src={IMAGE} alt="React logo" width="400" height="300" />
            <Counter />
        </div>
    )
}