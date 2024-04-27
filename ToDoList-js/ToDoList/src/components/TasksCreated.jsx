import {Trash} from 'phosphor-react'
import styles from './TasksCreated.module.css'



export function TasksCreated({comment}){
    return(
        <div className={styles.tareasCreadas}>
            <div className={styles.tareas}>
                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>{comment}</p>
                    <Trash size={18} />
                </div>
            </div>
        </div>
    )
}