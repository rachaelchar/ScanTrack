import React from 'react';
import EmployeePhoto from '../components/EmployeePhoto';
import NameCard from '../components/NameCard';
import SideNav from '../components/SideNav';
import ProfileButtons from '../components/ProfileButtons';


export default function Dummy() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideNav />
                    </div>
                    <div className="col-9">
                        <div className="row mt-3">
                            <div className="col-3">
                                <EmployeePhoto />
                            </div>
                            <div className="col-6">
                                <NameCard />
                            </div>
                        </div>
                        <div className="row mt-5 d-block mr-5 ml-5">
                            <ProfileButtons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
