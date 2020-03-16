import React from 'react'
import moment from "moment"
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const divStyle = {
    height: '25px',
    width: '25px',
    marginLeft: '80px'
};



export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            code: '',
            position: '',
        }

        this.firstChange = this.firstChange.bind(this);
        this.lastChange = this.lastChange.bind(this);
        this.codeChange = this.codeChange.bind(this);
        this.positionChange = this.positionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstChange(event) {
        this.setState({ first_name: event.target.value })
    }

    lastChange(event) {
        this.setState({ last_name: event.target.value })
    }

    codeChange(event) {
        this.setState({ code: event.target.value })
    }

    positionChange(event) {
        this.setState({ position: event.target.value })
    }


    handleSubmit(event) {
        event.preventDefault();

        const employee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            admin: 0,
            code: this.state.code,
            working_status_id: 1,
            position: this.state.position,
            hire_date: `${moment(moment().format('L'), 'MM/DD/YYYY').format('MM/DD/YYYY')} 00:00:00`,
            vacation_time: 0.00,
            sick_time: 0.00,
            picture_fp: "https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
            pay_type_id: 1,
            password: "*",
        }

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            code: this.state.code,
            email: this.state.code,
            password: "*",
        }



        axios.post('/api/employees', employee)
            .then((response) => {
                console.log(response)
            });

        axios.post('/api/users', user)
            .then((response) => {
                console.log(response)
            });
        this.setState({ first_name: '' })
        this.setState({ last_name: '' })
        this.setState({ code: '' })
        this.setState({ position: '' })
    }





    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input value={this.state.first_name} onChange={this.firstChange} type="text" className="form-control text-left" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input value={this.state.last_name} onChange={this.lastChange} type="text" className="form-control text-left" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email Address</label>
                    <input value={this.state.code} onChange={this.codeChange} type="email" className="form-control text-left" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Position</label>
                    <input value={this.state.position} onChange={this.positionChange} type="text" className="form-control text-left" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        )
    }
}