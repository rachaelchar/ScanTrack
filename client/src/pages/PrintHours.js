import React, { useContext, useEffect } from "react";
import SideNav from '../components/SideNav';
import HoursTable from '../components/HoursTable';
import { AuthContext } from "../AuthContext";


export default function PrintHours() {

    const { checkAdminStatus, isAdmin } = useContext(AuthContext);

    useEffect(() => {
        console.log("Admin?", isAdmin)
    }, []);

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
