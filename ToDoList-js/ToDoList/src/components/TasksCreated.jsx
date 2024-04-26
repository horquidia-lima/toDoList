import {Trash} from 'phosphor-react'
import styles from './TasksCreated.module.css'



export function TasksCreated({taskText}){
    return(
        <div className={styles.tareasCreadas}>
            <div className={styles.tareas}>
                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>{taskText}</p>
                    <Trash size={18} />
                </div>
            </div>
        </div>
    )
}