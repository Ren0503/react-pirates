import React from 'react'

const useUpdate = () => {
  const [, update] = React.useReducer(() => ({}))
  return update
}

export default useUpdate
