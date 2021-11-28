import React from 'react'
import './Counter.css'

interface CounterProps {
  onIncrement: () => void
  onDecrement: () => void
  counter: number
}

const Counter = ({ counter, onDecrement, onIncrement }: CounterProps) => (
  <div className={'d-grid gap-2'}>
    <h2>Counter</h2>
    <div className={'d-flex gap-2'}>
      <button
        type={'button'}
        className={'btn btn-lg btn-primary'}
        onClick={onIncrement}
      >
        <i className={'bi-plus-circle'} />
      </button>
      <button
        type={'button'}
        className={'btn btn-lg btn-secondary'}
        onClick={onDecrement}
      >
        <i className={'bi-dash-circle'} />
      </button>
    </div>
    <p>Total: {counter}</p>
  </div>
)

export default Counter
