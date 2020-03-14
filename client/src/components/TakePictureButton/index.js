import React from 'react';
import Button from 'react-bootstrap/Button';
import WebcamTest from '../WebcamTest';
import S3 from '../WebcamTest/AWSUpload2';

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
                        <WebcamTest hideModel={this.handleShowDialog} />
                        <S3 />
                    </dialog>
                )}
            </div>
        )
    }
}

