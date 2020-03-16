import React from 'react';
import SideNav from '../components/SideNav';
import HoursTable from '../components/HoursTable';



export default function PrintHours() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideNav />
                    </div>
                    <div className="col-9">
                        <div className="row container-fluid mt-5">
                            <HoursTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
