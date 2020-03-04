import React from "react";
import Moment from "react-moment";
import Jumbotron from "react-bootstrap/Jumbotron";
import './style.css';

export default function ScanJumbotron() {

  return (
    <div>
      <Jumbotron id="jumbotron" className="shadow p-3 mb-5 bg-white border border-secondary" >
        <div id="currentTime" className="text-center">

          <Moment id="scan-clock" format="LT"></Moment> <br />
          <Moment id="scan-date" format="MMMM Do, YYYY"></Moment>

          <form id="scan-form" className="">
            <div className="mt-4" onkeypress="">
              <input id="badgeID"
                className="border mb-3"
                type="text" placeholder="Scan Badge" />
            </div>
          </form>
        </div>
      </Jumbotron>
    </div>
  )
}