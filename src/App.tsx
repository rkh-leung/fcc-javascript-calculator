import React, {useState} from 'react';
import './App.css';

function App() {
    type stateType = number | string
    const [state, setState] = useState<stateType>(0)
    const [history, setHistory] = useState(0)
    const clearHandler = () => setState(0)
    const inputHandler = (e: React.BaseSyntheticEvent) => {
        setState(prevState  => {
            if (prevState === 0) {
                return Number(e.target.value)
            } else {
                return String(prevState).concat(e.target.value)
            }
        })
    }
    return (
        <div className="App">
            <header className="App-header">
                FCC JavaScript Calculator
            </header>
            <div id={'result'}>{history}</div>
            <input id={'display'} value={state}/>
            <div className={'input-Display'}>
                <button className={'input-op'} id={'equals'}>{'\u003d'}</button>
                <button className={'input-op'} id={'add'}>{'\u002b'}</button>
                <button className={'input-op'} id={'subtract'}>{'\u2212'}</button>
                <button className={'input-op'} id={'multiply'}>{'\u00D7'}</button>
                <button className={'input-op'} id={'divide'}>{'\u00F7'}</button>
                <button className={'input-op'} id={'decimal'}>{'\u002e'}</button>
                <button className={'input-op'} id={'clear'} onClick={clearHandler}>{'\u0043'}</button>
                <button className={'input-num'} id={'zero'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={0}
                >0
                </button>
                <button className={'input-num'}
                        id={'one'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={1}>1
                </button>
                <button className={'input-num'} id={'two'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={2}
                >2
                </button>
                <button className={'input-num'} id={'three'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={3}
                >3
                </button>
                <button className={'input-num'} id={'four'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={4}
                >4
                </button>
                <button className={'input-num'} id={'five'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={5}
                >5
                </button>
                <button className={'input-num'} id={'six'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={6}
                >6
                </button>
                <button className={'input-num'} id={'seven'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={7}
                >7
                </button>
                <button className={'input-num'} id={'eight'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={8}
                >8
                </button>
                <button className={'input-num'} id={'nine'}
                        onClick={inputHandler}
                        type={'submit'}
                        value={9}
                >9
                </button>
            </div>
        </div>
    );
}

export default App;
