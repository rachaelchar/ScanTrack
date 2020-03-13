import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeePhoto from '../components/EmployeePhoto';
import NameCard from '../components/NameCard';
import SideNav from '../components/SideNav';
import ProfileButtons from '../components/ProfileButtons';


export default function Dummy(props) {

    const [employee, setEmployee] = React.useState(null);

    const params = useParams()

    React.useEffect(() => {
        const id = params.code
        setEmployee(props.allUsers.filter(employee => employee.id == id)[0])
    }, [])


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideNav />
                    </div>
                    {employee !== null &&
                        <div className="col-9">
                            <div className="row mt-3">
                                <div className="col-3">
                                    <EmployeePhoto />
                                </div>
                                <div className="col-6">
                                    <NameCard employeeInfo={employee} />
                                </div>
                            </div>
                            <div className="row mt-5 d-block mr-5 ml-5">
                                <ProfileButtons />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
