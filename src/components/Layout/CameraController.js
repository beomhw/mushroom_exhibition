// 이 파일은 카메라 조정하는 컴포넌트

import React from 'react';
import styled, {css} from 'styled-components';
import {IoIosArrowUp, IoIosArrowBack, IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';

// 메세지 alert
import {
    useDispatch
} from '../../MessageContext';
import { sleep } from '../../util/sleep';

// Icon CSS 적용
const IconCss = css`
    font-size: 32px;
    color: #7D7D7D;
`;
const IconUp = styled(IoIosArrowUp)`${IconCss};`;
const IconDown = styled(IoIosArrowDown)`${IconCss};`;
const IconRight = styled(IoIosArrowForward)`${IconCss};`;
const IconLeft = styled(IoIosArrowBack)`${IconCss};`;

const Container = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 10px;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;

    button {
        width: 80px;
        height: 80px;   
        border-radius: 90px;
        background-color: #ffffff;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
        border: 0;     
        cursor: pointer;
        &:active {
            ${IconDown}, ${IconUp}, ${IconRight}, ${IconLeft} {
                color: #57CC99;
                font-size: 28px;
            }
            box-shadow: inset -5px 5px 20px rgba(0, 0, 0, 0.25);
        }
        transition: all 0.1s ease-in;
    }
`;

const Up = styled.button`
    grid-row: 1;
    grid-column: 2;
`;
const Right = styled.button`
    grid-row: 2;
    grid-column: 3;
`;
const Down = styled.button`
    grid-row: 3;
    grid-column: 2;
`;
const Left = styled.button`
    grid-row: 2;
    grid-column: 1;
`;

const CameraController = () => {

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

    // Up, Right등등이 감싸주는거니까 저기에 이벤트 적용하면 될 듯!
    return (
        <Container>
            <Up onClick={() => dispatchAction("UP")}>     <IconUp />      </Up>
            <Right onClick={() => dispatchAction("RIGHT")}>  <IconRight />   </Right>
            <Down onClick={() => dispatchAction("DOWN")}>   <IconDown />    </Down>
            <Left onClick={() => dispatchAction("LEFT")}>   <IconLeft />    </Left>
        </Container>
    );
}

export default CameraController;