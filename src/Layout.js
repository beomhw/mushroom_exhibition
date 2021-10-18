// 전체적인 레이아웃 구성 파일

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import * as Component from './components/Layout/export';
import MessageBox from './util/MessageBox';

const BodyContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LayoutContainer = styled.div`
    width: 1800px;
    height: 800px;
    display: flex;

    #socketElementContainer {
        width: 500px;
        display: flex;
        flex-direction: column;
    }

    #controllerContainer {
        width: 500px;
        display: flex;
        flex-direction: column;
    }

    #trailerContainer {
        width: 800px;
        display: flex;
        flex-direction: column;
    }
`;


const Layout = () => {
    const [trailer, setTrailer] = useState([
        {
            id: "A",
            state: true,
            source: "./assets/video/재배환경등록.mp4"     
        },
        {
            id: "B",
            state: false,
            source: "./assets/video/기기동작.mp4"     
        }
    ]);

    return (
        <BodyContainer>
            <MessageBox />
            <LayoutContainer>
                <div id="socketElementContainer">
                    <Component.SocketVideo />
                    <Component.SocketInfo />
                </div>
                <div id="controllerContainer">
                    <Component.MachineController />
                    <Component.CameraController />
                </div>
                <div id="trailerContainer">
                    <Component.Trailer trailer={trailer}/>
                    <Component.TrailerChoice trailer={trailer} setTrailer={setTrailer}/>
                </div>
            </LayoutContainer>
        </BodyContainer>
    )
}

export default Layout;