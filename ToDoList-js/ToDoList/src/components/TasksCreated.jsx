import {Trash} from 'phosphor-react'
import styles from './TasksCreated.module.css'



export function TasksCreated({comment, onDeleteComment}){

    function handleDeleteComment(){
        onDeleteComment(comment)
    }
    return(
        <div className={styles.tareasCreadas}>
            <div className={styles.tareas}>
                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>{comment}</p>
                    <button onClick={handleDeleteComment} title='Deletar task'>
                        <Trash size={18} />
                    </button>
                    
                </div>
            </div>
        </div>
    )
}