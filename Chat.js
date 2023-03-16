import React from 'react';
import ChatBot from "react-simple-chatbot";
import{ Segment } from "semantic-ui-react";

function Chat() {
  const steps = [

    {
      id: "Greet",
      message: "Hello, Welcome to ChatBot",
      trigger: "bing",
    },
    {
      id: "bing",
      message: "what is your name?",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Can you please provide me your location",
     trigger: "issues",

    },
    {
      id: "issues",
      user: true,
      trigger: "location",
    },
    {
      id: "location",
      message: "Kindly select the following roles in which you are interested",
     trigger: "issue",
    },

    {
      id: "issue",
      options: [
        {
          value: "Frontend Developer",
          label: "Frontend Developer",
          trigger: "React",
        },
        { value: "Backend Developer", label: "Backend Developer", trigger: "node" },
        { value: "Data Engineer", label: "Data Engineer", trigger: "dbms" }
      ],
    },
    {
      id: "React",
      message:
        "Thanks for letting us know, we will get back to you soon",
      end: true,
    },
    {
      id: "node",
      message:
        "Thanks for letting us know, we will get back to you soon",
      end: true,
    },
    {
      id: "dbms",
      message:
        "Thanks for letting us know, we will get back to you soon",
      end: true,
    },
  ]; 
  return (
    <div className='d-flex m-2 w-75'>
    
    {/* <Segment floated="cente"> */}
    <ChatBot  steps={steps}/>
    {/* </Segment> */}
    </div>

  );
}

export default Chat