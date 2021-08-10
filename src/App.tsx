import React, { useState } from 'react'
import './App.css'

interface Counter {
  add: number
  subtract: number
  multiply: number
  divide: number
}

function App() {
  type stateType = number | string | symbol
  const initialState: stateType[] = [0]
  const initialCounter: Counter = {
    add: 0,
    subtract: 0,
    multiply: 0,
    divide: 0,
  }
  const [state, setState] = useState(initialState)
  const [counter, setCounter] = useState(initialCounter)
  const clearState = () => setState(initialState)
  const clearCounter = () => setCounter(initialCounter)
  const inputHandler = (e: React.BaseSyntheticEvent) => {
    switch (e.target.id) {
      case 'add':
        counter.add++
        break
      case 'subtract':
        counter.subtract++
        break
      case 'multiply':
        counter.multiply++
        break
      case 'divide':
        counter.divide++
        break
    }
    if (e.target.className !== 'special') {
      if (state.length === 1 && (state[0] === 0 || state[0] === '0')) {
        state.pop()
        setState((prevState) => [...prevState, e.target.value])
      } else {
        setState((prevState) => [...prevState, e.target.value])
      }
    } else {
      // calculates total
    }
  }

  const calculateInput = (state: stateType[], counter: Counter) => {
    const chunk = [...state]
    let result = 0
    let mutiply = 0
    let divide = 0
    let add = 0
    let subtract = 0
    if (counter.multiply !== 0) {
      // run recursively by counter.add
      const num1 = +chunk
        .splice(
          0,
          chunk.findIndex((el) => el === '*')
        )
        .join('')
      chunk.shift()
      const num2 = +chunk.join('')
      mutiply = num1 * num2
    }
    if (counter.add !== 0) {
      // run recursively by counter.add
      const num1 = +chunk
        .splice(
          0,
          chunk.findIndex((el) => el === '+')
        )
        .join('')
      chunk.shift()
      const num2 = +chunk.join('')
      add = num1 + num2
    }
    if (counter.subtract !== 0) {
      // run recursively by counter.add
      const num1 = +chunk
        .splice(
          0,
          chunk.findIndex((el) => el === '-')
        )
        .join('')
      chunk.shift()
      const num2 = +chunk.join('')
      add = num1 - num2
    }
    if (counter.divide !== 0) {
      // run recursively by counter.add
      const num1 = +chunk
        .splice(
          0,
          chunk.findIndex((el) => el === '/')
        )
        .join('')
      chunk.shift()
      const num2 = +chunk.join('')
      add = num1 / num2
    }
    console.log(add)
    result = add + mutiply + subtract + divide
    clearCounter()
    clearState()
    console.log(result)
    return setState([String(result)])
  }

  const displayState = (state: stateType[]) => {
    console.log(state)
    console.log('counter', counter)
    return state.join('')
  }
  return (
    <div className='App'>
      <header className='App-header'>FCC JavaScript Calculator</header>
      <input id={'display'} value={displayState(state)} />
      <div className={'input-Display'}>
        <button
          className={'special'}
          id={'equals'}
          onClick={() => calculateInput(state, counter)}
          value={'='}
        >
          {'\u003d'}
        </button>
        <button
          className={'input-sym'}
          id={'add'}
          onClick={inputHandler}
          value={'+'}
        >
          {'\u002b'}
        </button>
        <button
          className={'input-sym'}
          id={'subtract'}
          onClick={inputHandler}
          value={'-'}
        >
          {'\u2212'}
        </button>
        <button
          className={'input-sym'}
          id={'multiply'}
          onClick={inputHandler}
          value={'*'}
        >
          {'\u00D7'}
        </button>
        <button
          className={'input-sym'}
          id={'divide'}
          onClick={inputHandler}
          value={'/'}
        >
          {'\u00F7'}
        </button>
        <button
          className={'input-sym'}
          id={'decimal'}
          onClick={inputHandler}
          value={'.'}
        >
          {'\u002e'}
        </button>
        <button className={'input-sym'} id={'clear'} onClick={clearState}>
          {'\u0043'}
        </button>
        <button
          className={'input-num'}
          id={'zero'}
          onClick={inputHandler}
          value={0}
        >
          0
        </button>
        <button
          className={'input-num'}
          id={'one'}
          onClick={inputHandler}
          value={1}
        >
          1
        </button>
        <button
          className={'input-num'}
          id={'two'}
          onClick={inputHandler}
          value={2}
        >
          2
        </button>
        <button
          className={'input-num'}
          id={'three'}
          onClick={inputHandler}
          value={3}
        >
          3
        </button>
        <button
          className={'input-num'}
          id={'four'}
          onClick={inputHandler}
          value={4}
        >
          4
        </button>
        <button
          className={'input-num'}
          id={'five'}
          onClick={inputHandler}
          value={5}
        >
          5
        </button>
        <button
          className={'input-num'}
          id={'six'}
          onClick={inputHandler}
          value={6}
        >
          6
        </button>
        <button
          className={'input-num'}
          id={'seven'}
          onClick={inputHandler}
          value={7}
        >
          7
        </button>
        <button
          className={'input-num'}
          id={'eight'}
          onClick={inputHandler}
          value={8}
        >
          8
        </button>
        <button
          className={'input-num'}
          id={'nine'}
          onClick={inputHandler}
          value={9}
        >
          9
        </button>
      </div>
    </div>
  )
}

export default App
