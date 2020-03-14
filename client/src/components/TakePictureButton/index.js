import React from 'react';
import Button from 'react-bootstrap/Button';
import WebcamTest from '../WebcamTest';

export default class ProfileButtons extends React.Component {

    state = { isOpen: false };

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
                        <WebcamTest />
                        <div className="container-fluid">
                            {/* <div id="picDiv">
                                <Camera />
                            </div>
                            <div id="btnDiv">
                                <button id="webcam" class="camBtns">Start Webcam</button>
                                <SnapshotButton />

                            </div> */}
                            <button onClick={this.handleShowDialog}>Close me</button>
                        </div>
                    </dialog>
                )}
            </div>
        )
    }
}

