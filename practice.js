// // import React, { useState } from 'react';
// // import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = async () => {
//     const message = { text: input, sender: 'user' };
//     setMessages([...messages, message]);
//     setInput('');
//     const dialogflowResponse = await axios.post(
//       `https://api.dialogflow.com/v1/query?v=20150910`,
//       {
//         query: input,
//         lang: 'en',
//         sessionId: 'my-chatbot-session',
//       },
//       {
//         headers: {
//           Authorization: `Bearer YOUR_DIALOGFLOW_API_KEY`,
//         },
//       }
//     );
//     const botMessage = {
//       text: dialogflowResponse.data.result.fulfillment.speech,
//       sender: 'bot',
//     };
//     setMessages([...messages, botMessage]);
//   };

//   return (
//     <div>
//       <div className="chatbox">
//         {messages.map((message, index) => (
//           <div key={index} className={message.sender}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-box">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
// // // function Chat() {
  
// // //   return (
// // //     <div className='bg-primary w-100 mt-2 ' >
// // //     <div className="d-flex justify-content-center fixed-bottom" >
// // //     <input type="text" className="form-control w-50 "  placeholder='Ask me anything...' ></input>
// // //     </div>
// // //     </div>

// // //   );
// // // }

// // // export default Chat
