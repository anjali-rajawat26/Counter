import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const startCounting = (step) => {
    setCount((c) => c + step) // single immediate increment on click

    // wait a bit before starting repeated increments (so quick clicks = only +1)
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCount((c) => c + step)
      }, 100)
    }, 400) // hold for 400ms before it starts auto-repeating
  }

  const stopCounting = () => {
    clearTimeout(timeoutRef.current)
    clearInterval(intervalRef.current)
  }

  return (
    <div className="counter-card">
      <h1>My Counter</h1>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button
          className="btn minus"
          onMouseDown={() => startCounting(-1)}
          onMouseUp={stopCounting}
          onMouseLeave={stopCounting}
        >
          -
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          className="btn plus"
          onMouseDown={() => startCounting(1)}
          onMouseUp={stopCounting}
          onMouseLeave={stopCounting}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default App