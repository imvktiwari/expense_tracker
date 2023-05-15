import React,{ useState } from 'react'
import ExpenseItem from './ExpenseItem.js'
import ExpensesFilter from './Expensesfilter.js'
import './Expenses.css'
import Card from '../UI/Card.js'
function Expenses(props) {
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler = selectedFilter => {
        // console.log('Expenses.js');
        // console.log(selectedFilter);
        setFilteredYear(selectedFilter);
    }
    return (<div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.expenses.map(expenses=><ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>)};
        </Card></div>)
}
export default Expenses