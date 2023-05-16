import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandlerYear = (event) => {
        props.onChangeFilter(event.target.value);
    };
    const dropdownChangeHandlerMonth = (event) => {
        props.onChangeFilterMonth(event.target.value);

    };
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter</label>
                <select value={props.selectedMonth} onChange={dropdownChangeHandlerMonth}>
                    <option value='11'>December</option>
                    <option value='10'>November</option>
                    <option value='9'>October</option>
                    <option value='8'>September</option>
                    <option value='7'>August</option>
                    <option value='6'>July</option>
                    <option value='5'>June</option>
                    <option value='4'>May</option>
                    <option value='3'>April</option>
                    <option value='2'>March</option>
                    <option value='1'>February</option>
                    <option value='0'>January</option>
                    <option value='-1'>None of the above</option>
                </select>
                <select value={props.selected} onChange={dropdownChangeHandlerYear}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='-1'>None of the above</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;