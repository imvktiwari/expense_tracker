import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('-1');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const [filteredMonth, setFilteredMonth] = useState('-1');

    const filterMonthChangeHandler = selectedMonth => {
        setFilteredMonth(selectedMonth);
    };



    let filteredExpensesYear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    { filteredYear === '-1' && (filteredExpensesYear = props.items) }



    let filteredExpenses = filteredExpensesYear.filter(expense => {
        return expense.date.getMonth().toString() === filteredMonth;
    })
    { filteredMonth === '-1' && (filteredExpenses = filteredExpensesYear) }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedMonth={filteredMonth}
                    onChangeFilterMonth={filterMonthChangeHandler}
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;