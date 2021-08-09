import React, {useState} from 'react';
import './App.css';

function App() {
    const [state, setState] = useState(0)

    const clearHandler = () => setState(0)
    return (
        <div className="App">
            <header className="App-header">
                FCC JavaScript Calculator
            </header>
            <div id={'display'}>{state}</div>
            <div className={'input-Display'}>
                <button className={'input-op'} id={'equals'}>{'\u003d'}</button>
                <button className={'input-op'} id={'add'}>{'\u002b'}</button>
                <button className={'input-op'} id={'subtract'}>{'\u2212'}</button>
                <button className={'input-op'} id={'multiply'}>{'\u00D7'}</button>
                <button className={'input-op'} id={'divide'}>{'\u00F7'}</button>
                <button className={'input-op'} id={'decimal'}>{'\u002e'}</button>
                <button className={'input-op'} id={'clear'} onClick={clearHandler}>{'\u0043'}</button>
                <button className={'input-num'} id={'zero'}>0</button>
                <button className={'input-num'} id={'one'}>1</button>
                <button className={'input-num'} id={'two'}>2</button>
                <button className={'input-num'} id={'three'}>3</button>
                <button className={'input-num'} id={'four'}>4</button>
                <button className={'input-num'} id={'five'}>5</button>
                <button className={'input-num'} id={'six'}>6</button>
                <button className={'input-num'} id={'seven'}>7</button>
                <button className={'input-num'} id={'eight'}>8</button>
                <button className={'input-num'} id={'nine'}>9</button>
            </div>
        </div>
    );
}

export default App;
