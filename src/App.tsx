import { framer } from "framer-plugin"
import ToDoList from "./ToDoList"
import "./App.css"

framer.showUI({
    position: "top right",
    width: 340,
    height: 500,
})

export function App() {
    return (
        <main>
            <ToDoList />
        </main>
    )
}
