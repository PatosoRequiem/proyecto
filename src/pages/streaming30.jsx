import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sample-gif.gif";
import "../stylesheets/streaming/streaming.scss";

export const Streaming = () => {
    const [messages, setMessages] = useState([]); // Chat en vivo
    const [comments, setComments] = useState([]); // Comentarios
    const [chatInputValue, setChatInputValue] = useState("");
    const [commentName, setCommentName] = useState(""); // Nombre para el comentario
    const [commentMessage, setCommentMessage] = useState(""); // Mensaje para el comentario

    // Refs para autoscroll
    const messagesEndRef = useRef(null);
    const commentsEndRef = useRef(null);

    const handleSendMessage = () => {
        if (chatInputValue.trim() !== "") {
            setMessages([...messages, chatInputValue]); // Agrega el mensaje al final
            setChatInputValue(""); // Limpia el campo de entrada
        }
    };

    const handleSendComment = () => {
        if (commentName.trim() !== "" && commentMessage.trim() !== "") {
            setComments([...comments, { name: commentName, message: commentMessage }]); // Agrega el comentario
            setCommentName(""); // Limpia el nombre
            setCommentMessage(""); // Limpia el mensaje
        }
    };

    const handleKeyDownChat = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    const handleKeyDownComment = (e) => {
        if (e.key === "Enter") {
            handleSendComment();
        }
    };

    // Autoscroll para el chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Autoscroll para los comentarios
    useEffect(() => {
        commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [comments]);

    return (
      <div>
        <div className="streaming-container">
          <Link to="/proyecto30">
            <img src={returnIcon} alt="Return" className="return-icon" />
          </Link>
          <h1>Streaming</h1>
        </div>

        <div className="content-container">
          {/* Imagen a la izquierda */}
          <div className="streaming-image-section">
            <img src={sampleImage} alt="Streaming" style={{ width: "100%" }} />
          </div>

          {/* Sección de chat y comentarios alineados */}
          <div className="chat-and-comments">
            {/* Chat en vivo */}
            <div className="chat-section">
              <h2>Chat en vivo</h2>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className="chat-message">{msg}</div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>
              <div className="chat-input">
                <input 
                  type="text" 
                  value={chatInputValue} 
                  onChange={(e) => setChatInputValue(e.target.value)} 
                  onKeyDown={handleKeyDownChat} 
                  placeholder="Escribe un mensaje..." 
                />
                <button onClick={handleSendMessage}>Enviar</button>
              </div>
            </div>

            {/* Comentarios */}
            <div className="comments-section">
              <h2>Comentarios</h2>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <strong>{comment.name}:</strong> {comment.message}
                  </div>
                ))}
                <div ref={commentsEndRef}></div>
              </div>
              <div className="comments-input">
                <input 
                  type="text" 
                  value={commentName} 
                  onChange={(e) => setCommentName(e.target.value)} 
                  placeholder="Tu nombre..." 
                />
                <input 
                  type="text" 
                  value={commentMessage} 
                  onChange={(e) => setCommentMessage(e.target.value)} 
                  onKeyDown={handleKeyDownComment} 
                  placeholder="Deja tu comentario..." 
                />
                <button onClick={handleSendComment}>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Streaming;
