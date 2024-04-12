import imgLogo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
    return(
        <header className={styles.header}>
            <strong>
                <img src={imgLogo} alt="Logo ToDoList" />
            </strong>
        </header>
    )
}