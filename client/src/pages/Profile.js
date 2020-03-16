import React, { Component } from 'react';
import EmployeePhoto from '../components/EmployeePhoto';
import NameCard from '../components/NameCard';
import SideNav from '../components/SideNav';
import ProfileButtons from '../components/ProfileButtons';
import TakePictureButton from '../components/TakePictureButton';


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.code,
            employee: this.props.allUsers
        }
    }

    componentDidMount() {
        var id = parseInt(this.props.match.params.code)
        this.setState({
            employee: this.props.allUsers.filter(xyz => xyz.id === id)[0]
        })
    }

    updatePic = (filepath) => {
        this.setState(prevState => ({
            employee: {
                ...prevState.employee,
                picture_fp: filepath
            }
        }))
    }

    render() {
        return (
            <div>
                {console.log("jsadkadkah", this.props.allUsers)}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <SideNav />
                        </div>
                        {this.employee !== null &&
                            <div className="col-9">
                                <div className="row mt-3">
                                    <div className="col-3">
                                        <EmployeePhoto employeeInfo={this.state.employee} />
                                    </div>
                                    <div className="col-6 offset-md-3">
                                        <NameCard employeeInfo={this.state.employee} />
                                    </div>
                                </div>
                                <div className="row mt-5 d-block mr-5 ml-5">
                                    {/* <ProfileButtons /> */}
                                    <TakePictureButton updatePic={this.updatePic} employeeInfo={this.state.employee} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}