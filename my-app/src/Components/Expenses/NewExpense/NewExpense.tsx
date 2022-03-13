import React, { useState } from "react";
import { IExpense } from "../../../model/expense.model";
import { v4 } from "uuid";

const NewExpense : React.FC<{addExpense : (expense : IExpense) => void }> = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState<string>('initial value');
    const [enteredAmount, setEnteredAmount] = useState<string>('');
    const [enteredDate, setEnteredDate] = useState<string>('');

    const titleChange = (event : React.ChangeEvent<HTMLInputElement>) => setEnteredTitle(event.target.value)
    const amountChange = (event : React.ChangeEvent<HTMLInputElement>) => setEnteredAmount(event.target.value)
    const dateChange = (event : React.ChangeEvent<HTMLInputElement>) => setEnteredDate(event.target.value)

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        const expense : IExpense = {
            id : v4(),
            title : enteredTitle,
            amount : Number(enteredAmount),
            createdAt : new Date(enteredDate)
        }
        props.addExpense(expense)
    }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-center">Add New Expense</h5>
                        </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            {/* title */}
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" 
                                    name="title" 
                                    className="form-control" 
                                    onChange={titleChange}
                                    value={enteredTitle}/>
                                </div>
                            {/* amount */}
                            <div className="form-group">
                                <label htmlFor="amount">Amount :</label>
                                <input type="number" 
                                    className="form-control" 
                                    min="0.1" step="0.1" 
                                    value={enteredAmount}
                                    onChange={amountChange}/>
                                </div>
                            {/* createdAt */}
                            <div className="form-group">
                                <label htmlFor="created-at">Created At :</label>
                                <input type="date" 
                                    className="form-control" 
                                    min="2019-01-01" max="2022-12-31"  
                                    value={enteredDate}
                                    onChange={dateChange}/>
                                </div>
                            {/* buttons */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-success btn-block"
                                            type="submit">Add Expense</button>
                                        </div>
                                    <div className="col-6">
                                        <button className="btn btn-warning btn-block">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default NewExpense;