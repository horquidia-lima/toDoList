import imgClipBoard from '../assets/Clipboard.svg'
import styles from './NoTasksCreated.module.css'

export function NoTasksCreated(){
    return(
        <div className={styles.notasks}>
            <div className={styles.notask}>
                <img src={imgClipBoard} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}