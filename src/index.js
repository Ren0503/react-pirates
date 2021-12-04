import React from 'react'
import styles from './styles.module.css'
import useAsync from './hooks/useAsync'
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { useAsync }