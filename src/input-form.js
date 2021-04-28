import React, { Component } from "react";
import InputFormComponent from "./input-form-component";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: "",
      conversionRate: "",
      amount: "",
      result: "",
      historyList: [],
      editList: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let historyList = [
      ...this.state.historyList,
      {
        selectedCurrency: this.state.selectedCurrency,
        conversionRate: this.state.conversionRate,
        amount: this.state.amount,
      },
    ];
    this.setState({
      result: this.state.conversionRate * this.state.amount,
      historyList: historyList,
      selectedCurrency: "",
      conversionRate: "",
      amount: "",
    });
  };

  handleEdit = (e) => {
    let selectedList = this.state.historyList.find(
      (item, index) => index === e
    );
    this.setState({
      editList: true,
      selectedCurrency: selectedList.selectedCurrency,
      conversionRate: selectedList.conversionRate,
      amount: selectedList.amount,
    });
  };
  handleDelete = (e) => {
    let selectedList = this.state.historyList.filter(
      (item, index) => index !== e
    );
    this.setState({
      historyList: selectedList,
    });
  };

  render() {
    return (
      <div className="input-form">
        <InputFormComponent
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <input type="text" value={this.state.result} className="result" />
        <div className="table-class">
          <table className="tab-class">
            <tr>
              <th className="thHeading">Currency</th>
              <th className="thHeading">Rate</th>
              <th className="thHeading3">Amount</th>
            </tr>
          </table>
        </div>
        {this.state.historyList.map((item, index) => {
          return (
            <div>
              <table className="list-class">
                <tr>
                  <td className="td-class">
                    <input
                      type="text"
                      value={item.selectedCurrency}
                      className="td-input1"
                    />
                  </td>
                  <td className="td-class">
                    <input
                      type="text"
                      value={item.conversionRate}
                      className="td-input2"
                    />
                  </td>
                  <td className="td-class3">
                    <input
                      type="text"
                      value={item.amount}
                      className="td-input3"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleEdit(index)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(index)}
                      className="edit-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InputForm;
