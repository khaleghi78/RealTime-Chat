import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
if(!localStorage.getItem('username')) return <LoginForm />


    return (
    <ChatEngine 
       height="100vh"
       projectID="7fcce73a-8b38-40e4-a026-62d313fb4212"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } /> }
       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />

    );
}

export default App;