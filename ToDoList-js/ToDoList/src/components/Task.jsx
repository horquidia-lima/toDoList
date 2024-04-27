import {PlusCircle} from 'phosphor-react'
import styles from './Task.module.css'
import { TasksCreated } from './TasksCreated'
import { NoTasksCreated } from './NoTasksCreated'
import { useState } from 'react'


  const tasks = [
    {
      id: 1,
      textTask: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
  
    {
      id: 2,
      textTask: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
  
    {
      id: 3,
      textTask: 'Bnteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    }
    
  ]  

export function Task() {
  const [task, setTask] = useState([])

  const [newTask, setNewTask] = useState('')

  const [taskCount, setTaskCount] = useState(0)

  function handleCreateNewTask(){
    event.preventDefault()
    setTask([...task, newTask])
    setNewTask('')
    
    console.log(task)
    console.log(newTask)
    /*event.preventDefault()
    const newTaskComment = event.target.comment.value
    console.log(newTaskComment)*/
  }

  function handleNewTaskChange(){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(commentToDelete){
    const taskWithoutDeleteOne = task.filter(comment => {
      return comment != commentToDelete
    })
    setTask(taskWithoutDeleteOne)
  }

  function handleNewTaskInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatorio')
  }

  const isNewTaskEmpty = newTask.length === 0

  function handleTaskCount(){
    setTaskCount((state) => {
      return state + 1
      console.log(handleTaskCount)
    })
  }

    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input 
                    className={styles.inputText}
                    name='comment'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />

                <button className={styles.buttonCreated} type='submit' disabled={isNewTaskEmpty} onClick={handleTaskCount}>Criar 
                    <PlusCircle size={16} />
                </button>
            </form>

            <div className={styles.statusTareas}>
                <p>
                    Tarefas criadas 
                    <span>{taskCount}</span>
                </p>

                <p>
                    Concluidas
                    <span> 2 de 5</span>
                </p>
            </div>
            <div>
              {task.length > 0  ? (
                <ul>
                  {task.map(comment => {
                    return(
                        <TasksCreated 
                            key={comment}
                            comment={comment}
                            onDeleteComment={deleteTask}
                        />
                  )
                  })}
                </ul>
              ) : (<NoTasksCreated/>)}
            </div>
        </div>
    )
}