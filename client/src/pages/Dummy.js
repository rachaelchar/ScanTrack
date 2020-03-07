import React from 'react';
import EmployeePhoto from '../components/EmployeePhoto';
import NameCard from '../components/NameCard';
import SideNav from '../components/SideNav';

export default function Dummy() {
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-3">
                    <SideNav />
                    <div className="row"></div>
                </div>
                <div className="col-3 mt-3">
                    <EmployeePhoto />
                </div>
                <div className="col-6 mt-3">
                    <NameCard />
                </div>
            </div>
        </div>
    )
}