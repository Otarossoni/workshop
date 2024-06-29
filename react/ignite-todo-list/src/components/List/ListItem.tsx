import { Trash, Check } from '@phosphor-icons/react'

import { Task } from '../../App'
import styles from './ListItem.module.css'

interface Props {
  data: Task
  removeTask: (id: string) => void
  changeTaskStatus: ({ id, value }: { id: string; value: boolean }) => void
}

export function ListItem({ data, removeTask, changeTaskStatus }: Props) {
  function handleChangeTaskStatus() {
    changeTaskStatus({ id: data.id, value: !data.isDone })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isDone
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.isDone
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleChangeTaskStatus}>
          <input readOnly type="checkbox" checked={data.isDone} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isDone && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.description}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
