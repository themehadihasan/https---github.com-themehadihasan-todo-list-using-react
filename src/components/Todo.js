import React from 'react';
import { useState } from 'react';
import todo from '../images/todo-512.webp';
import './Todo.css';

function Todo() {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData) {
            alert("Add item first");
        } else {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((elem, ind) => {
            return ind != id;
        });
        setItems(updatedItems);
    }

    return (
        <>
        <div className='main'>
            <div className='todo'>
                <figure>
                    <img src={todo} alt='todo-image' />
                    <h2>Create Today's List</h2>
                </figure>
                <div className='addItems'>
                    <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder='Add item...' />
                    <i className='bx bxs-plus-circle' title='Add item' onClick={addItem}></i>
                </div>

                <div className='showItems'>
                {
                    items.map((elem, ind) => {

                        return (
                            <div className='eachItem' key={ind}>
                                <p>{elem}</p>
                                <i class='bx bx-trash' title='Remove item' onClick={() => deleteItem(ind)}></i> 
                            </div>
                        )
                    })
                }                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Todo;