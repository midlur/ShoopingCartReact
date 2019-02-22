import React, { Component } from 'react';

export default class AddDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          code: '',
          qty: ''
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { code, qty } = this.state;

       this.fetchData(code,qty);
      }

    fetchData(code,qty) {
        fetch('http://127.0.0.1:8080/report/items/add', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    itemCode: code,
    totalQty: qty,
  }),
});

    };

  render() {
    const { code, qty } = this.state;
    return (
        <React.Fragment>
      <div>
        <form className="form-inline" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Item Code:</label>
                <input type="number" name = "code" value = { code } onChange={this.onChange} className="form-control" id="code"/>
            </div>
            <div className="form-group">
                <label>Quantity:</label>
                <input type="number" name = "qty" value = { qty } onChange={this.onChange} className="form-control" id="qty"/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}
