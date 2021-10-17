// 이 파일은 영상 보여주는 컴포넌트

import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Container = styled.div`
    width: 100%;
    height: 500px;
    background-color: #ffffff;
    margin: 40px auto;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
`;

const Trailer = ({trailer}) => {

    return (
        <Container>
            {trailer.map(t => {
                if(t.state)
                    return <ReactPlayer 
                        className='react-player fixed-bottom'
                        url={t.source}
                        width='100%'
                        height='100%'
                        controls={false} 
                        playing={true}
                        loop={true}
                    />
            })}
        </Container>
    );
}

export default Trailer;