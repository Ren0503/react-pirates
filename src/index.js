import React from 'react'
import styles from './styles.module.css'
import useAsync from './hooks/useAsync'
import useBodyScrollLock from './hooks/useBodyScrollLock'
import useClickInside from './hooks/useClickInside'
import useClickOutside from './hooks/useClickOutside'
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { 
  useAsync,
  useBodyScrollLock,
  useClickInside,
  useClickOutside,
}