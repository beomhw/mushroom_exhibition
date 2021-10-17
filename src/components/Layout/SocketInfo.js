// 이 파일은 실시간 온도, 습도 값 보여주는 컴포넌트

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 480px;
    height: 120px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;

const InfoContainer = styled.span`
    width: 115px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 60px 0 60px;

    .label {
        font-size: 28px;
        color: #7D7D7D;
    }   

    .value {
        font-size: 64px;
        color: ${p => p.color};
        margin-top: 10px;
        font-weight: 800;
    }
`;

const SocketValue = styled.span`
    
`;

const SocketInfo = () => {

    return (
        <Container>
            <InfoContainer  color="#CC6B6B" >
                <span className="label">온도</span>
                <span className="value"><SocketValue>24</SocketValue>°C</span>
            </InfoContainer>
            <InfoContainer  color="#53A7B3" >
                <span className="label">습도</span>
                <span className="value"><SocketValue>60</SocketValue>%</span>
            </InfoContainer>
        </Container>
    );
}

export default SocketInfo;