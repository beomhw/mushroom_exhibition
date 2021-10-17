// 이 파일은 카메라 조정하는 컴포넌트

import React from 'react';
import styled, {css} from 'styled-components';
import {IoIosArrowUp, IoIosArrowBack, IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';
import {GrPowerReset} from 'react-icons/gr';

// Icon CSS 적용
const IconCss = css`
    font-size: 32px;
    color: #7D7D7D;
`;
const IconUp = styled(IoIosArrowUp)`${IconCss};`;
const IconDown = styled(IoIosArrowDown)`${IconCss};`;
const IconRight = styled(IoIosArrowForward)`${IconCss};`;
const IconLeft = styled(IoIosArrowBack)`${IconCss};`;
const ResetIcon = styled(GrPowerReset)`${IconCss};`;

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
            ${IconDown}, ${IconUp}, ${IconRight}, ${IconLeft}, ${ResetIcon} {
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
const Center = styled.button`
    grid-row: 2;
    grid-column: 2;
`;

const CameraController = () => {

    // Up, Right등등이 감싸주는거니까 저기에 이벤트 적용하면 될 듯!
    return (
        <Container>
            <Up>     <IconUp />      </Up>
            <Right>  <IconRight />   </Right>
            <Down>   <IconDown />    </Down>
            <Left>   <IconLeft />    </Left>
            <Center> <ResetIcon />   </Center>
        </Container>
    );
}

export default CameraController;