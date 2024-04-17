import {PlusCircle} from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
    return(
        <form className={styles.form}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
            />

            <button>Criar 
                <PlusCircle size={16} />
            </button>
        </form>
    )
}