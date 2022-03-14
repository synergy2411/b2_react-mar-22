import React, { useState } from "react";
import { IExpense } from "../../model/expense.model";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
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
  const [selectedYear, setSelectedYear] = useState<string>("2019");

  const changeShowComp = () => setShowComp(!showComp);

  const onAddExpense = (expense: IExpense) => {
    setExpenses([expense, ...expenses]);
    setShowComp(false);
  };

  const onCancelForm = () => setShowComp(false);

  const onSelectYear = (selectedYear: string) => {
    console.log("Selected Year - ", selectedYear);
    setSelectedYear(selectedYear);
  };

  let filteredExpenses = expenses.filter(
    (expense: IExpense) =>
      expense.createdAt.getFullYear().toString() === selectedYear
  );

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
        <div className="col-4">
          <ExpenseFilter onSelectYear={onSelectYear} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {showComp && (
            <NewExpense addExpense={onAddExpense} cancelForm={onCancelForm} />
          )}
        </div>
      </div>
      <div className="row">
        {filteredExpenses.map((expense: IExpense) => <ExpenseItem expense={expense}  key={expense.id} />
        )}
      </div>
    </div>
  );
};
export default ExpenseList;
