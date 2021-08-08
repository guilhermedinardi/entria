import React from 'react'
import styled from 'styled-components'

 const ModalContainer = styled.div`
    display: ${props => props.isOpen ? 'grid' : null}; 
    display: grid;
    grid-template-rows: auto 1fr auto;
    border: none;
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 8em;
    right: 1em;
    left: 0em;
    z-index: 10;
    background-color: #fefefe;
    box-shadow: -1px 5px 25px rgba(0,0,0, 0.5);
    border-radius: 15px;
    opacity: 1;
`  
 
const ButtonCloseModal = styled.button`
    border: none;
    border-radius: 15px;
    background-color: initial;
    width: 2em;
    font-size: 1.5em;
    color: #161B33;
    cursor: pointer;
    margin-top: 0.5em;
    place-self: self-end;
    &:hover{
        border: none;
        background-color: #161B33;
        color: #ffffff;
    }
`

const Content = styled.div`
    padding: 3.3em;

`
 
const Modal = (props) => {
    const onClickClose = (e) => { 
        props.onClose(e.target.value)
    } 
    return (    
        <ModalContainer>
            <ButtonCloseModal onClick={onClickClose}>X</ButtonCloseModal>
            <Content>{props.children}</Content>
        </ModalContainer>
    )
}
export default Modal