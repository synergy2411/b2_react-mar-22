import React, { useState } from "react";
import { IExpense } from "../../model/expense.model";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";

const EXPENSE_DATA = [
  {
    id: "e001",
    title: "grocery",
    amount: 12.99,
    createdAt: new Date("Dec 12, 2019"),
  },
  {
    id: "e002",
    title: "shopping",
    amount: 10.99,
    createdAt: new Date("Aug 1, 2020"),
  },
];

const ExpenseList = () => {
  let [expenses, setExpenses] = useState<Array<IExpense>>(EXPENSE_DATA);
  const [showComp, setShowComp] = useState<boolean>(false);

  const changeShowComp = () => setShowComp(!showComp);

  const onAddExpense = (expense: IExpense) => {
    setExpenses([expense, ...expenses])
    setShowComp(false);
  };

  const onCancelForm = () => setShowComp(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <button
            className="btn btn-block btn-secondary"
            onClick={changeShowComp}
          >
            {showComp ? "Hide Form" : "Add Expense"}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {showComp && <NewExpense addExpense={onAddExpense} cancelForm={onCancelForm} />}
        </div>
      </div>
      <div className="row">
          {expenses.map((expense : IExpense) => <ExpenseItem expense={expense} key={expense.id}/>)}
      </div>
    </div>
  );
};
export default ExpenseList;
