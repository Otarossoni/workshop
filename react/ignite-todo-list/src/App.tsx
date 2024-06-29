import { PlusCircle } from '@phosphor-icons/react'

import { useState } from 'react'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from './components/List/ListHeader'
import { ListEmpty } from './components/List/ListEmpty'
import { ListItem } from './components/List/ListItem'

export interface Task {
  id: string
  description: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const tasksDoneCounter = tasks.filter((item) => item.isDone === true)

  function handleAddTask() {
    if (!inputValue) {
      alert('It would be convenient to fill the field!')
      return
    }

    const newTast: Task = {
      id: crypto.randomUUID(),
      description: inputValue,
      isDone: false,
    }

    setTasks((state) => [...state, newTast])
    setInputValue('')
  }

  function handleRemoveTask(id: string) {
    if (!confirm('Do you really want to delete this task?')) {
      return
    }

    const filteredTasks = tasks.filter((task) => task.id !== id)

    setTasks(filteredTasks)
  }

  function handleChangeTaskStatus({
    id,
    value,
  }: {
    id: string
    value: boolean
  }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskCountersContainer}>
          <Input
            value={inputValue}
            onChange={(evento) => setInputValue(evento.target.value)}
          />
          <Button onClick={handleAddTask}>
            Create
            <PlusCircle size={16} color="var(--gray-400)" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            tasksDoneCounter={tasksDoneCounter.length}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <ListItem
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  changeTaskStatus={handleChangeTaskStatus}
                />
              ))}
            </div>
          ) : (
            <ListEmpty />
          )}

          <div></div>
        </div>
      </section>
    </main>
  )
}

export default App
