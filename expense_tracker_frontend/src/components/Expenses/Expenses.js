import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesFilterMonth from './ExpensesFilterMonth'
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const [filteredMonth, setFilteredMonth] = useState('0');

    const filterMonthChangeHandler = selectedMonth => {
        setFilteredMonth(selectedMonth);
    };
    console.log(props.items);
    const filteredExpensesYear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    console.log(filteredExpensesYear);
    const filteredExpenses =filteredExpensesYear.filter(expense => {
        return expense.date.getMonth().toString() === filteredMonth;
    })
    console.log(filteredExpenses);
    console.log(filteredMonth)
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilterMonth
                    selectedMonth={filteredMonth}
                    onChangeFilterMonth={filterMonthChangeHandler}
                />
                <ExpensesFilter
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