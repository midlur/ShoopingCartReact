import React from 'react';
import axios from 'axios';
import ReportLayout from './ReportLayout';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
 
class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [],
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
        this.setData();
    }
 
  handleChange = date => {
    this.setState({
        startDate: date
        }, this.setData);
    };

  formatDate() {
    var d = new Date(this.state.startDate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

setData = () => {
    let date = this.formatDate();
    axios.get(
        "http://127.0.0.1:8080/report/reportValues/" + date
    )
    .then(response => {
        this.setState({
            data: response.data
        });
    })
};
 
  render() {
    return (
        <React.Fragment>
            <DatePicker
                dateFormat = "YYYY-MM-dd"
                selected={this.state.startDate}
                onChange={this.handleChange}  
             />

            <div className = "tableLayout">
                <ReportLayout data = {this.state.data}/>
            </div>

        </React.Fragment>
    );
  }
}

export default Calender;