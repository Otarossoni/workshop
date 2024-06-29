import styles from './ListHeader.module.css'

interface Props {
  tasksCounter: number
  tasksDoneCounter: number
}

export function ListHeader({ tasksCounter, tasksDoneCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Total tasks</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Tasks done</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${tasksDoneCounter} of ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
