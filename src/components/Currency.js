import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  return (
    <div className="alert alert-success">
      <label className="bg-success rounded text-light">
        Currency:
        <select value={currency} className="bg-success rounded text-light" onChange={e=>dispatch({type:"CHG_CURRENCY",payload:e.target.value})}>
          <option value="£">£ Pound</option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      </label>
    </div>
  );
};
export default Currency;
