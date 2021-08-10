import React, { useState } from 'react'
import './App.css'

function App() {
  type stateType = number | string | symbol
  const initialState: stateType[] = [0]
  const [state, setState] = useState(initialState)
  const clearState = () => setState(initialState)
  const inputHandler = (e: React.BaseSyntheticEvent) => {
    if (e.target.className !== 'special') {
      if (e.target.id === 'decimal') {
        if (
          state[state.length - 1] !== '.' &&
          state[state.length - 2] !== '.'
        ) {
          setState((prevState) => [...prevState, e.target.value])
        }
      }
      if (
        state.length === 1 &&
        (state[0] === 0 || state[0] === '0') &&
        e.target.id !== 'decimal'
      ) {
        state.pop()
        setState((prevState) => [...prevState, e.target.value])
      } else if (
        e.target.className === 'input-num' ||
        e.target.className === 'input-sym'
      ) {
        setState((prevState) => [...prevState, e.target.value])
      }
    }
  }

  const calculateInput = (state: stateType[]) => {
    let j = 0
    let newArr: stateType[] = []
    const indexes = state
      .map((el, idx) => (isNaN(Number(el)) ? idx : ''))
      .filter(String)
    console.log('idx', indexes)
    for (let i = 0; i < state.length; i++) {
      if (state[i] === '-' && isNaN(Number(state[i - 1]))) {
        newArr.push(state.slice(i, i + 1).join(''))
        j = i + 1
      } else if (isNaN(Number(state[i]))) {
        // if current index is a symbol
        newArr.push(Number(state.slice(j, i).join(''))) // first number before math operator
        newArr.push(state.slice(i, i + 1).join('')) // push math operator to array
        j = i + 1 // update math op counter
      }
    }
    newArr.push(Number(state.slice(j, state.length).join(''))) // push number after the last math op to array
    clearState()
    setState([eval(newArr.join(''))]) // eval usage for convenience >>>EXTREMELY BAD for optimization/performance<<<
  }

  const displayState = (state: stateType[]) => {
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
          onClick={() => calculateInput(state)}
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
          className={'decimal'}
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
