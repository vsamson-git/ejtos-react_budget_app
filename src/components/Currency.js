import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default () => {
    const { dispatch } = useContext(AppContext);
    const handleChange = (event) => {
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
    }

    return (
        <div id="currency-change">
            <select name="currency" id="currency-select" onChange={handleChange}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    )
}