import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input className={styles.container} placeholder="Add a task" {...rest} />
  )
}
