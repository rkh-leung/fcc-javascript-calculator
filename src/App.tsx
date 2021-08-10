import React, { useState } from 'react'
import './App.css'

function App() {
  type stateType = number | string | symbol
  const initialState: stateType[] = [0]
  const [state, setState] = useState(initialState)
  const clearState = () => setState(initialState)
  const inputHandler = (e: React.BaseSyntheticEvent) => {
    if (e.target.className !== 'special') {
      if (state.length === 1 && (state[0] === 0 || state[0] === '0')) {
        state.pop()
        setState((prevState) => [...prevState, e.target.value])
      } else {
        setState((prevState) => [...prevState, e.target.value])
      }
    }
  }

  const calculateInput = (state: stateType[]) => {
    let j = 0
    let newArr: stateType[] = []
    for (let i = 0; i < state.length; i++) {
      if (isNaN(Number(state[i]))) {
        newArr.push(Number(state.slice(j, i).join('')))
        newArr.push(state.slice(i, i + 1).join(''))
        j = i + 1 // skip op sign
      }
    }
    newArr.push(Number(state.slice(j, state.length).join('')))
    clearState()
    setState([eval(newArr.join(''))])
  }

  const displayState = (state: stateType[]) => {
    console.log(state)
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
