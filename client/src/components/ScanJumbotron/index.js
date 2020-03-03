import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ScanJumbotron() {

  return (
    <Jumbotron className="shadow p-3 mb-5 bg-white border border-secondary">
      <div id="currentTime" className="text-center">
        <h1 className="font-weight-bold">12:00pm</h1>
        <h3>Saturday, February 29th</h3>
        <form id="scan-form" className="">
          <div className="mt-4" onkeypress="">
            <input id="badgeID"
              className="border"
              type="text" placeholder="Scan Badge" />
            <div className="mt-4">
              <span className="popuptext" id="myPopup">ID Scanned</span>
            </div>
          </div>
        </form>
      </div>
    </Jumbotron>
  )
}