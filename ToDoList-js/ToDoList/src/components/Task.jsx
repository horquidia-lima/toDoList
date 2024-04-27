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
  const [task, setTask] = useState([
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  ])

  const [newTask, setNewTask] = useState('')

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

    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input 
                    className={styles.inputText}
                    name='comment'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />

                <button>Criar 
                    <PlusCircle size={16} />
                </button>
            </form>

            <div className={styles.statusTareas}>
                <p>
                    Tarefas criadas 
                    <span> 5</span>
                </p>

                <p>
                    Concluidas
                    <span> 2 de 5</span>
                </p>
            </div>
            {/*<NoTasksCreated/>*/}
            {task.map(comment => {
                return(
                    <TasksCreated 
                        key={comment}
                        comment={comment}
                        onDeleteComment={deleteTask}
                    />
                )
            })}
        </div>
    )
}