// 이 파일은 물 주기, AI 배지 인식 버튼 있는 컴포넌트

import React from 'react';
import styled from 'styled-components';

import {
    useDispatch
} from '../../MessageContext';

import { sleep } from '../../util/sleep';

const Container = styled.div`
    width: 250px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width: 230px;
    height: 90px;
    margin: 0 auto;
    margin-bottom: 38px;
    border-radius: 70px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    color: #7D7D7D;

    &:active {
        font-size: 22px;
        box-shadow: inset -5px 5px 20px rgba(0, 0, 0, 0.25);
    }
    transition: box-shadow 0.1s ease-in;
`;

const MachineController = () => {

    // 메세지 뜨는 이벤트
    const dispatch = useDispatch();
    const dispatchAction = async (type) => {
        // 메세지 타입에 따라 다른 문자열 출력
        dispatch({
            type: type
        })

        await sleep(2000); // 2초 쉬고

        // 메세지 초기화 및 사라지기
        dispatch({
            type: "DISAPPEAR"
        })
    }

    return (
        <Container>
            <Button onClick={() => dispatchAction("WATER")}>물 주기</Button>
            <Button onClick={() => dispatchAction("DETECT")}>AI 배지 인식</Button>
        </Container>
    );
}

export default MachineController;