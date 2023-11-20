import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default () => {
    const { dispatch, currency } = useContext(AppContext);
    const handleClick = (event) => {
        console.log(event.target['value']);
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
    }
    const currency_list = {"$": "Dollar", "£": "Pound", "€": "Euro", "₹": "Ruppee"}

    return (
        <div id="currency-change">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Currency ({currency} {currency_list[currency]})
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {Object.keys(currency_list).map(key => (<a className="dropdown-item" href="#" onClick={handleClick} value={key} key={key}>{key} {currency_list[key]}</a>))}
                </div>
                </div>
        </div>
    )
}