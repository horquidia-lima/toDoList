import {Trash} from 'phosphor-react'
import styles from './TasksCreated.module.css'

export function TasksCreated(){
    return(
        <div className={styles.tareasCreadas}>
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

            <div className={styles.tareas}>
                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={18} />
                </div>

                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={18} />
                </div>

                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={18} />
                </div>

                <div className={styles.tarea}> 
                    <input type="checkbox" /> 
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={18} />
                </div>
            </div>
            
            
        </div>
    )
}