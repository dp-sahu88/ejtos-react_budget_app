import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, expenses,currency} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);


  const handelBudget = (e) => {
    console.log(e.target.value)
    if ( e.target.value > 20000){
        alert("Budget should not exceed 20000...")
    }
    else if( e.target.value< totalExpenses){
        alert("You can't reduce the budget value lower than the spending")
    }
    else{
        dispatch({ type: "SET_BUDGET", payload: e.value });
    }
  };



  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency} <input type="number" value={budget} onChange={handelBudget} />
      </span>
    </div>
  );
};
export default Budget;
