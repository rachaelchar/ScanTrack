import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ProfileButtons() {
    return (
        <div>
  <Button id="button" variant="primary" size="lg" block>
    Request Time Off
  </Button>
  <Button id="button" variant="secondary" size="lg" block>
    View Pay Period
  </Button>
</div>
    )
}

