import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function reset() {
    setCount(0)
  }

  function increment() {
    setCount(oldCount => oldCount + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
