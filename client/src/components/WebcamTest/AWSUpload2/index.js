import React, { Component } from 'react';
import S3FileUpload from 'react-s3';


const config = {
  bucketName: 'employee-login',
  dirName: 'photos',
  region: 'us-east-2',
  accessKeyId: 'AKIAJQZG7Q3SK4UDAXJA',
  secretAccessKey: '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',
}
class AWSUpload2 extends Component {
  constructor() {
    super();
  }

  upload(e) {
    console.log(e.target.files[0])

    S3FileUpload
      .uploadFile(e.target.files[0], config)
      .then(data => console.log(data.location))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        Hiii
        <input
          type="file"
          onChange={this.upload}
        />
      </div>
    )
  }
}

export default AWSUpload2;