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
            
        </div>
    )
}