import React, { Component } from 'react';
import './Chat.css';
import MessageHistory from './MessageHistory';
import MessageInput from './MessageInput';

const messages = [
  {
    id: 'message11',
    user: 'Test User 1',
    message: 'Test Message 1',
  },
  {
    id: 'message12',
    user: 'Test User 2',
    message: 'Test Message 2',
  },
  {
    id: 'message13',
    user: 'Test User 3',
    message: 'Test Message 3',
  },
  {
    id: 'message14',
    user: 'Test User 4',
    message: 'Test Message 4',
  },
  {
    id: 'message15',
    user: 'Test User 5',
    message: 'Test Message 5',
  }
];

class Chat extends Component {
  render() {
    return (
      <div>
        <MessageHistory messages={messages} />
        <MessageInput />
      </div>
    );
  }
}

export default Chat;
//need to have the name of user as the label for the message that they send when it appears in the chat history
