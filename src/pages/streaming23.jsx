import React, { useState } from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sample-gif.gif"; // Asegúrate de que la ruta sea correcta
import "../stylesheets/streaming/streaming.scss"; // Importa el archivo SCSS específico para esta página

export const Streaming = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (inputValue.trim() !== "") {
            setMessages([inputValue, ...messages]); // Agrega el nuevo mensaje arriba
            setInputValue(""); // Limpia el campo de entrada
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
      <>
        <div className="streaming-container">
          <Link to="/proyecto23">
            <img 
              src={returnIcon} 
              alt="Return" 
              className="return-icon" 
            />
          </Link>
          <h1>Streaming</h1>
        </div>
        
        <div className="content-container">
          <div className="streaming-image-section">
            <img src={sampleImage} alt="Streaming" style={{ width: "100%" }} />
          </div>
          <div className="chat-section">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className="chat-message">{msg}</div>
              ))}
            </div>
            <div className="chat-input">
              <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={handleKeyDown} // Llama a handleKeyDown al presionar una tecla
                placeholder="Escribe un mensaje..." 
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Streaming;
