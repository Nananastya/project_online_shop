import React from 'react';
import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import "./../scss/style.scss";

export default function ModalWindow(props) {
        let headerBg, bodyBg;
        if (props.color === "red"){
            headerBg = "#b30000";
            bodyBg = "#ea2e2e";
        }
        else if (props.color === "blue"){
            headerBg = "#03406A";
            bodyBg = "#3E94D1";
        }
        
        return (
            <Modal className='modal-window' show={props.show1} onHide={props.handleClose}>
                <Modal.Header className='modal-header' style={{backgroundColor: `${headerBg}`}} closeButton={props.closeButton} closeVariant='white'>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body ' style={{width:"100%", backgroundColor: `${bodyBg}`}}>
                    {props.text}
                    <p>{ 
                            props.lastChosenProduct &&
                            <img 
                                    style={{
                                        marginTop: "10px",
                                        height: '100px',
                                        width: '110px',
                                    }}
                                src={props.lastChosenProduct.url} alt="food" />
                        }</p>
                    </Modal.Body>
                    <Modal.Footer className='modal-footer' style={{backgroundColor: `${bodyBg}`}}>
                        {props.actions}
                    </Modal.Footer>
            </Modal>
        )
}


ModalWindow.propTypes = {
    show1: PropTypes.bool,
    text: PropTypes.node,
    header: PropTypes.string,
    lastChosenProduct: PropTypes.object,
    actions: PropTypes.element,
    handleClose: PropTypes.func,
    closeButton: PropTypes.bool
}