// 이 파일은 영상 선택 컴포넌트

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 70px;
    height: 80px;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 230px;
    height: 80px;
    margin: 0 auto;
    border-radius: 70px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    color: ${p => p.state ? "#57CC99" : "#7D7D7D" };

    &:active {
        font-size: 22px;
        box-shadow: inset -5px 5px 20px rgba(0, 0, 0, 0.25);
    }

    transition: box-shadow 0.1s ease-in;
`;

const TrailerChoice = ({trailer, setTrailer}) => {

    const onVideo = (state) => {
        setTrailer(trailer.map(t => 
            t.id === state ? {...t, state: !t.state} : {...t, state: false}
        ));
    }

    return (
        <Container>
            <Button state={trailer[0].state} onClick={(e) => onVideo("A")}>재배 환경 등록</Button>
            <Button state={trailer[1].state} onClick={(e) => onVideo("B")}>기기 동작</Button>
        </Container>
    );
}

export default TrailerChoice;