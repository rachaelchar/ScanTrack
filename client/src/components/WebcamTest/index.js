import React, { Fragment, useState, Component } from "react";
import download from 'downloadjs'
import ReactDOM from "react-dom";
import { Camera } from "./camera";
import { Root, Preview, Button, GlobalStyle } from "./styles";
import axios from 'axios';

export default function WebcamTest(props) {
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  // const [cardImage, setCardImage] = useState();


  const submitFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
      alert("you fucking did it bitch!")
    }).catch(error => {
      // handle your error
    });
  }

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={blob => {
              // setCardImage(blob);
              const file = new File([blob], "filename");
              console.log(file)
              submitFile(file)
              // download(file, "file.jpeg", "image/jpeg");
            }}
          // onClear={() => setCardImage(undefined)}
          />
        )}

        {/* {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )} */}

        <Button
          onClick={() => {
            props.hideModel()
            setIsCameraOpen(false);
            // setCardImage(undefined);
          }}
        >
          Close Camera
          </Button>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

