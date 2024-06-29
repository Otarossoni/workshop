import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src="/todo-logo.svg" alt="App logo" />
    </header>
  )
}
