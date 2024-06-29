import styles from './ListEmpty.module.css'

export function ListEmpty() {
  return (
    <div className={styles.container}>
      <p>
        <strong>You have no tasks</strong>
        Please, create one
      </p>
    </div>
  )
}
