// 메세지 박스 컴포넌트

import React, {useState} from 'react';
import styled from 'styled-components';
import {
    useMessageState
} from '../MessageContext';

const Container = styled.div`
    opacity: ${p => p.state ? 1 : 0};
    position: fixed;
    width: 350px;
    height: 70px;
    transition: opacity 0.3s;
    /* border: 1px solid #dddddd; */
    top: 370px;
    left: 630px;
    /* background-color: #ffffff; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    p {
        font-family: 'S-CoreDream-7ExtraBold';
        font-size: 20px;
    }
`;

const MessageBox = () => {
    const state = useMessageState();

    return (
        <Container state={state.status}>
            <p>{state.message}</p>
        </Container>
    )
}

export default MessageBox;