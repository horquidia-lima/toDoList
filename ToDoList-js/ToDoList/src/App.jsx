import { Header } from './components/Header'
import { Task } from './components/Task'
import { TasksCreated } from './components/TasksCreated'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Task/>
      <TasksCreated/>
    </div>
  )
}


