import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

const ChatBot = () => {
  const [messages, setMessage] = useState([
    {
      message: "Hi there, How can I help you",
      sender: "ChatGPt",
      direction: "ingoing",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    setMessage([...messages, newMessage]);
    setTyping(true);
  };
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="Bot is typing..." /> : null
            }
          >
            {messages?.map((message, i) => {
              return (
                <Message key={i} model={message}>
                  <Avatar
                    name="Joe"
                    src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
                  />
                </Message>
              );
            })}
            {/* <Message
              model={{
                message: "Hi there, How can I help you",
                sentTime: "just now",
                sender: "Joe",
              }}
            /> */}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;
