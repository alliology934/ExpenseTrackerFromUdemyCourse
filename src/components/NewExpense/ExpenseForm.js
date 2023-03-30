import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //to use one state instead of multiple
    // const [userInput, setUserInput] = useState({
    //     setEnteredTitle: '',
    //     setEnteredAmount: '',
    //     setEnteredDate: ''
    // });

    // const titleChangeHandler = (event) => {
    //This way of calling state has a risk of not updating from the correct previous state due to the way React
    //handles state updating on the back-end.
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //  })
    //if your state updated depends on the previous state, use the syntax below
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value };
    //     });
    // };

    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value,
    //     })
    // };

    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value,
    //     })
    // };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;