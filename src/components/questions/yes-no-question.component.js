import React from 'react'
import Button from 'react-bootstrap/Button'

const YesNoQuestion = ({ question }) => (
  <div>
    <p>What is you name?</p>
    <div>
      <Button>Yes</Button>
      <Button>No</Button>
    </div>
  </div>
)

export default YesNoQuestion
