import {GlobalStyle} from './styles/GlobalStyle';
import Layout from './Layout';
import { MessageProvider } from './MessageContext';

const App = () => 
    <MessageProvider> 
        <GlobalStyle />
        <Layout />
    </MessageProvider>

export default App;