import "./style.css"
import IMAGE from './react-logo.jpeg'

export const App = () => {
    return (
        <div>
            <h1>React Typescript Webpack Starter Template {process.env.name}</h1>
            <img src={IMAGE} alt="React logo" width="400" height="300" />
        </div>
    )
}