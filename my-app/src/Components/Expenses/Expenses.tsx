import React, { useState } from "react";
import ExpenseItem from './ExpenseItem/ExpenseItem';

const ExpenseList = () => {
  let expenses = [{
    id: "e001",
    title: "grocery",
    amount: 12.99,
    createdAt: new Date("Dec 12, 2019"),
  },{
    id: "e002",
    title: "shopping",
    amount: 10.99,
    createdAt: new Date("Aug 1, 2020"),
  }];
  return (
    <div className="container">
      <div className="row">
          <ExpenseItem expense={expenses[0]} />
          <ExpenseItem expense={expenses[1]} />
        </div>
    </div>
  );
};
export default ExpenseList;
