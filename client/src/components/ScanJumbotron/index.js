import React from "react";
import Moment from "react-moment";
import Jumbotron from "react-bootstrap/Jumbotron";
import './style.css';

export default class ScanJumbotron extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event, props) {
    event.preventDefault();
    const code = this.state.value;
    this.setState({ value: "" });
    this.props.clockInFunc(code)
  }

  render() {
    return (
      <div>
        <Jumbotron id="jumbotron" className="shadow p-3 my-5 bg-white border border-secondary" >
          <div id="currentTime" className="text-center">

            <Moment id="scan-clock" format="LT"></Moment> <br />
            <Moment id="scan-date" format="MMMM Do, YYYY"></Moment>

            <form id="scan-form" className="" onSubmit={this.handleSubmit}>
              <div className="mt-4">
                <input id="badgeID"
                  className="border mb-3" caretHidden={true} autofocus="true"
                  ref={(ip) => this.myInp = ip}
                  type="text" placeholder="Scan Badge" onChange={this.handleChange} value={this.state.value} />
              </div>
            </form>
          </div>
        </Jumbotron>
      </div>
    )
  }
}