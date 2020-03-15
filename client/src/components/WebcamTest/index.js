import React, { Fragment, Component } from "react";
import { Camera } from "./camera";
import { Root, Button, GlobalStyle } from "./styles";
import S3FileUpload from 'react-s3';
import axios from 'axios';


const config = {
  bucketName: 'employee-login',
  dirName: 'photos',
  region: 'us-east-2',
  accessKeyId: 'AKIAJQZG7Q3SK4UDAXJA',
  secretAccessKey: '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',
}



class WebcamTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCameraOpen: true,
      employee: this.props.employeeInfo
    }
  }

  upload(file) {
    S3FileUpload
      .uploadFile(file, config)
      .then(data => {
        console.log(data.location)
        axios.put(`/api/employees/picture`, {
          id: this.props.employeeInfo.id,
          picture_fp: data.location
        })
          .then(res => {
            this.setState({ employee: res.data })
          })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Fragment>
        <Root>
          {this.state.isCameraOpen && (
            <>
              <Camera
                onCapture={blob => {
                  const file = new File([blob], `${this.props.employeeInfo.code}1.jpg`, { type: "image/jpeg" });
                  console.log(file)
                  this.upload(file)

                }}
              />
            </>
          )}


          <Button
            onClick={() => {
              this.props.hideModel()
              this.setState({ isCameraOpen: false });
            }}
          >
            Close Camera
          </Button>
        </Root>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default WebcamTest;