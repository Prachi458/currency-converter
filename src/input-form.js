import React, {Component} from 'react'
import InputFormComponent from './input-form-component'

class InputForm extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedCurrency : "",
            conversionRate : "",
            amount : "",
            result : "",
            historyList : [],
            editList : false
        }
    }

    handleChange = (event) => {
        const{name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let historyList = [...this.state.historyList, {selectedCurrency : this.state.selectedCurrency, 
                           conversionRate : this.state.conversionRate, amount : this.state.amount}];
        this.setState({
            result : this.state.conversionRate * this.state.amount,
            historyList : historyList,
            selectedCurrency : "",
            conversionRate : "",
            amount : "",
        }) 
    }

    handleEdit = (e) => {
        let selectedList = this.state.historyList.find((item,index) => index === e)
        this.setState({
            editList : true,
            selectedCurrency : selectedList.selectedCurrency,
            conversionRate : selectedList.conversionRate,
            amount : selectedList.amount,
        })
    }
    
    render(){
        return(
            <div className="input-form">
                
                <InputFormComponent 
                {...this.state} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                />
                
                <input type="text" value={this.state.result} className="result"/>
                <div className="table-class">
                <table>
                    <tr>
                        <th style={{padding : "0.5rem"}}>Currency</th>
                        <th style={{padding : "0.5rem"}}>Rate</th>
                        <th style={{padding : "0.5rem"}}>Amount</th>
                    </tr>
                </table>
                </div>
                {this.state.historyList.map((item,index)=>{
                    return(
                        <div>
                            <table class="list-class">
                                <tr>
                                    <td style={{padding : "1.6rem"}}>{item.selectedCurrency}</td>
                                    <td style={{padding : "1.6rem"}}>{item.conversionRate}</td>
                                    <td style={{padding : "1.6rem"}}>{item.amount}</td>
                                    <td style={{padding : "1.6rem"}}><button onClick={ () => this.handleEdit(index)} className="edit-btn">edit</button></td>
                                </tr>
                            </table>
                           
                        </div>
                    )
                }
                )
                }
            </div>
        )
    }
}

export default InputForm