import React, {useState} from 'react';
import './App.css';

function App() {
    type stateType = number | string | symbol
    const initialState: stateType[] = [0]
    const [state, setState] = useState(initialState)
    const clearHandler = () => setState(initialState)
    const inputHandler = (e: React.BaseSyntheticEvent) => {
        console.log(e.target.className)
        if (e.target.className === 'input-num') {
            if (state.length === 1 && state[0] === 0) {
                state.pop()
                setState(prevState => [...prevState, +e.target.value])
            } else {
                setState(prevState => [...prevState, +e.target.value])
            }
        } else if (e.target.id === 'equals') {
            // calculates total
        }
        // switch (e.target.id) {
        //     case 'zero':
        //     case 'one':
        //     case 'two':
        //     case 'three':
        //     case 'four':
        //     case 'five':
        //     case 'six':
        //     case 'seven':
        //     case 'eight':
        //     case 'nine':
        //         if(initialState.length === 1) {
        //             initialState.pop()
        //             setState(prevState => [...prevState, +e.target.value])
        //         }
        // }

        // setState(prevState => {
        //     // @ts-ignore
        //     if (prevState === initialState[0]) {
        //         return Number(e.target.value)
        //     } else {
        //         return String(prevState).concat(e.target.value)
        //     }
        // })
    }
    const displayState = (state: stateType[]) => {
        console.log(state)
        return state.map(item => item.toString())
    }
    return (
        <div className="App">
            <header className="App-header">
                FCC JavaScript Calculator
            </header>
            <input id={'display'} value={displayState(state)}/>
            <div className={'input-Display'}>
                <button className={'special'} id={'equals'}>{'\u003d'}</button>
                <button className={'input-sym'} id={'add'}>{'\u002b'}</button>
                <button className={'input-sym'} id={'subtract'}>{'\u2212'}</button>
                <button className={'input-sym'} id={'multiply'}>{'\u00D7'}</button>
                <button className={'input-sym'} id={'divide'}>{'\u00F7'}</button>
                <button className={'input-sym'} id={'decimal'}>{'\u002e'}</button>
                <button className={'input-sym'} id={'clear'} onClick={clearHandler}>{'\u0043'}</button>
                <button className={'input-num'} id={'zero'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={0}
                >0
                </button>
                <button className={'input-num'}
                        id={'one'}
                        onClick={inputHandler}
                        value={1}>1
                </button>
                <button className={'input-num'} id={'two'}
                        onClick={inputHandler}
                        value={2}
                >2
                </button>
                <button className={'input-num'} id={'three'}
                        onClick={inputHandler}
                        value={3}
                >3
                </button>
                <button className={'input-num'} id={'four'}
                        onClick={inputHandler}
                        value={4}
                >4
                </button>
                <button className={'input-num'} id={'five'}
                        onClick={inputHandler}
                        value={5}
                >5
                </button>
                <button className={'input-num'} id={'six'}
                        onClick={inputHandler}
                        value={6}
                >6
                </button>
                <button className={'input-num'} id={'seven'}
                        onClick={inputHandler}
                        value={7}
                >7
                </button>
                <button className={'input-num'} id={'eight'}
                        onClick={inputHandler}
                        value={8}
                >8
                </button>
                <button className={'input-num'} id={'nine'}
                        onClick={inputHandler}
                        value={9}
                >9
                </button>
            </div>
        </div>
    );
}

export default App;
