import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonModal(props) {
  return (
    <Button variant="primary" 
      onClick={(e) => {
        props.onClick(e);
      }}
      style = {props.backgroundColor}>
      {props.text}
    </Button>
  )
}