import React, { Component } from 'react';
import '../ReportLayout.css';
import Date from './calender';

class ReportLayout extends Component {
  render() {
    
    return (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Insert Date and Time</th>
                <th scope="col"> Total Quantity</th>
                <th scope="col">Product Code</th>
                <th scope="col"> Action</th>
            </tr>
        </thead>
        <tbody>
      { this.props.data.map((element) => ( 
          <tr>
           <td>{ element.insertTime } </td>
           <td>{ element.totalQty } </td> 
           <td>{ element.itemCode } </td> 
           <td>{ element.dbAction } </td> 
        </tr> 
    ))
      }     
    </tbody>
    </table>
  )
  }
}

export default ReportLayout;
