import React, { useState ,useCallback} from 'react';
import './chat.css';
import userIcon from "../../assets/user-icon.png"
import gptImgLogo from "../../assets/chatgptLogo.svg"
import sendButton from "../../assets/send.svg"
import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"


const Chat = () => {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
      {
        text: "Hi I am assistant. I will help you to find your matching interest nearby..",
        isBot: true
      },
      {
        text:"User input",
        isBot:false
      }
    ]);
  

  
  const handleInputChange = (event) => { 
    const inputValue = event.target.value;
    setInput(inputValue);

  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = input;
    setInput("");
    const response = await chain.call({
      input: text,
    });
      
    const newHistory = [
      ...chatHistory,
      { text: text, isBot: false },
      { text: response.text, isBot: true }
    ];
    setChatHistory(newHistory);
  }
  
    const handleEnter =async(e)=>{
      if(e.key === 'Enter') {
      e.preventDefault();
      await handleSubmit(e);
      }
    }
  
    return (
        
    
        <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear" >
            <div className="Chat">
      <Navbar>
        <NavbarLink pageLink={true} path={"/"} name={"Home"} />
        <NavbarLink pageLink={true} path={"/profile"} name={"Profile"} />
      </Navbar>
          
      <div className="chats">
              {chatHistory.map((message, i) => // Changed 'answer' to 'chatHistory'
                  <div key={i}>
                      <div className={message.isBot ? "chat bot" : "chat"}>
                          <img className='chatimg' src={message.isBot ? gptImgLogo : userIcon} alt="" />
                          <p className="txt">{message.text}</p>
                      </div>
                      <br />
                  </div>
              )}
          </div>
          
          <div className="chatFooter">
              <div className="inp">
                  <input value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleEnter}
                  placeholder="Enter your name and details where you live" type="text"/>
                  <button onClick={handleSubmit} className="send"><img src={sendButton} alt="" /></button>
              </div>
          </div>
      </div>
      </div>
  );
  };
  
  export default Chat;
