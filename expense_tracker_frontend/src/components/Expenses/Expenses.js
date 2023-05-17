import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

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
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;