import React, { Component } from 'react'

export default class Delete extends Component {
    constructor() {
        super();
        this.state = {
          code: ''
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { code } = this.state;

       this.deleteData(code);
      }

    deleteData(code) {
        fetch('http://127.0.0.1:8080/report/items/delete/'+ code, {
  method: 'GET'
});
    }

    render() {
        const { code } = this.state;
        return (
            <React.Fragment>
          <div>
            <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Item Code:</label>
                    <input type="number" name = "code" value = { code } onChange={this.onChange} className="form-control" id="code"/>
                </div>
                    <button type="submit" className="btn btn-default">Delete</button>
            </form>
          </div>
          </React.Fragment>
        )
      }
}
