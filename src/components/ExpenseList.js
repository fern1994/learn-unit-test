import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// ใส่ export เข้าไปสำหรับ test ไม่ใส่มัน Test ไม่ได้
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
          props.expenses.map((expense) =>
            <ExpenseList key={expense.id} {...expense} />
          )
        )
    }

    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
