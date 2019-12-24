import React, { useReducer, useRef, useState } from 'react';
import './App.css';
import Todo from "./component/Todo";
import AddTask from "./component/AddTask";

function App() {

    const [items, setItems] = useState([]);

    
    let currentItem;
    let ref;
    
    const onSubmit = e => {
        setItems([...items, currentItem])
        e.preventDefault()
    }

    const addItem = e => {
        currentItem = ref.value;
    }

    return (
        <div className="App">
            <header className="App-header">
                <AddTask
                    addItem={addItem}
                    onSubmit={onSubmit}
                    ref={ref}
                />
            </header>
        </div>
    );
}

export default App;
