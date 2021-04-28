import React from 'react'

function InputFormComponent(props){
    return(
        <div className="input-form">
            <form onSubmit={props.handleSubmit}>
                <select name="selectedCurrency" value={props.selectedCurrency} onChange={props.handleChange} className="input-class" required>
                    <option>!--Select Currency--!</option>
                    <option value="USD">USD-US Dollor</option>
                    <option value="EUR">EUR-Euro</option>
                    <option value="JPY">JPY-Japanese Yen</option>
                    <option value="MYR">MYR-Malaysian Ringgit</option>
                    <option value="PKR">PKR-Pakistani Rupee</option>
                    <option value="SGD">SGD-Singapore Dollor</option>
                    <option value="SEK">SEK-Swedish Krona</option>
                    <option value="EGP">EGP-Egyptian Pound</option>
                </select>

                <input 
                placeholder="Enter Conversion Rate" 
                type="number" name="conversionRate" 
                value={props.conversionRate} 
                onChange={props.handleChange}
                className = "input-class"
                required
                />
                
                <input placeholder="Enter Amount" 
                type="number" name="amount" 
                value={props.amount} 
                onChange={props.handleChange}
                className = "input-class"
                required
                />
                
                <button type="submit" className="submit-button">Convert</button>
            </form>
            </div>
    )
}

export default InputFormComponent
