import React from 'react';
import Button from 'react-bootstrap/Button';
import WebcamTest from '../WebcamTest';

export default class ProfileButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div>

                <Button id="button" variant="secondary" size="lg" block onClick={this.handleShowDialog}>
                    Retake Profile Picture
                </Button>
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute", top: "0%", left: "0%", width: "85%", height: "90%" }}
                        open
                    >
                        <WebcamTest employeeInfo={this.props.employeeInfo} hideModel={this.handleShowDialog} />
                    </dialog>
                )}
            </div>
        )
    }
}

