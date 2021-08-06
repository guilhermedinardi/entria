import React from 'react'
import styled from 'styled-components'

 const ModalContainer = styled.div`
    display: ${props => props.isOpen ? 'flex' : null}; 
    width: 20em;
    height: 10em;
    background-color: #474973;
`  
 const Container = styled.div`
`
const ButtonCloseModal = styled.button``

const Content = styled.div``
 
const Modal = (props) => {
    const onClickClose = (e) => { 
        props.onClose(e.target.value)
    } 
    return (    
        <ModalContainer>
            <Container>
                <ButtonCloseModal onClick={onClickClose}>X</ButtonCloseModal>
                <Content>{props.children}</Content>
            </Container>
        </ModalContainer>
    )
}
export default Modal