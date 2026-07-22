import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const euroRate = 0.011;
    const result = this.state.amount * euroRate;
    this.setState({ currency: result.toFixed(2) });
  }

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <br />
          <label>Currency: {this.state.currency} Euro</label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
