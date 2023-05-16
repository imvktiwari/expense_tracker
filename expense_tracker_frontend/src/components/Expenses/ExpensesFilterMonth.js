import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilterMonth(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by month</label>
                <select value={props.selectedMonth} onChange={dropdownChangeHandler}>
                    <option value='11'>December</option>
                    <option value='10'>November</option>
                    <option value='9'>October</option>
                    <option value='8'>Spetember</option>
                    <option value='7'>Augustr</option>
                    <option value='6'>July</option>
                    <option value='5'>June</option>
                    <option value='4'>May</option>
                    <option value='3'>April</option>
                    <option value='2'>March</option>
                    <option value='1'>February</option>
                    <option value='0'>January</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;