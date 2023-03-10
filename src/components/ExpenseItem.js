import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  // const expenseDate = new Date();
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item_price">${props.amount}</div>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
