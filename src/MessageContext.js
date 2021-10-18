import React, {createContext, useReducer, useContext} from 'react';


const messageReducer = (state, action) => {
    switch(action.type) {
        case "UP":
            console.log(state);
            return {
                status: true,
                message: "카메라를 위로 이동합니다."
            }
        case "RIGHT":
            console.log(state);
            return {
                status: true,
                message: "카메라 각도를 오른쪽으로 이동합니다."
            }
        case "LEFT":
            return {
                status: true,
                message: "카메라 각도를 왼쪽으로 이동합니다."
            }
        case "DOWN":
            return {
                status: true,
                message: "카메라를 아래로 이동합니다."
            }
        case "WATER":
            return {
                status: true,
                message: "물 주기가 실행 중입니다."
            }
        case "DETECT":
            return {
                status: true,
                message: "배지를 인식 중입니다."
            }
        case "DISAPPEAR":
            return {
                status: false,
                message: ""
            }
        default:
            throw new Error(`unknown action type DESU ${action.type}`);
    }
}

const initialMessage = {
    status: false,
    message: ""
};

const MessageContext = createContext();
const DispatchContext = createContext();

export const MessageProvider = ({children}) => {

    const [state, dispatch] = useReducer(messageReducer, initialMessage);

    return (
        <MessageContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </MessageContext.Provider>
    );
}

export function useMessageState () {
    const state = useContext(MessageContext)
    if(!state) {
        return new Error("not found state")
    }

    return state;
}

export function useDispatch () {
    const dispatch = useContext(DispatchContext);
    if(!dispatch) {
        return new Error("not found dispatch");
    }

    return dispatch;
}